export const generateId = (prefix: string = "id"): string => {
  return `${prefix}-${Math.random().toString(36).substring(2, 11)}`;
};

export const announceToScreenReader = (
  message: string,
  priority: "polite" | "assertive" = "polite"
) => {
  if (typeof document === "undefined") return;

  const liveRegion = document.getElementById("aria-live-region") || createLiveRegion();
  liveRegion.setAttribute("aria-live", priority);
  liveRegion.textContent = message;

  setTimeout(() => {
    liveRegion.textContent = "";
  }, 1000);
};

const createLiveRegion = (): HTMLElement => {
  const liveRegion = document.createElement("div");
  liveRegion.id = "aria-live-region";
  liveRegion.setAttribute("role", "status");
  liveRegion.setAttribute("aria-live", "polite");
  liveRegion.setAttribute("aria-atomic", "true");
  liveRegion.style.cssText = `
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  `;
  document.body.appendChild(liveRegion);
  return liveRegion;
};

export const trapFocus = (containerElement: HTMLElement) => {
  const focusableElements = containerElement.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== "Tab") return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable?.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === lastFocusable) {
      firstFocusable?.focus();
      e.preventDefault();
    }
  };

  containerElement.addEventListener("keydown", handleTabKey);

  return () => {
    containerElement.removeEventListener("keydown", handleTabKey);
  };
};

export const isVisibleToScreenReader = (element: HTMLElement): boolean => {
  return (
    element.offsetWidth > 0 &&
    element.offsetHeight > 0 &&
    globalThis.getComputedStyle(element).visibility !== "hidden" &&
    element.getAttribute("aria-hidden") !== "true"
  );
};

export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const selector =
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
  return Array.from(container.querySelectorAll<HTMLElement>(selector)).filter((el) =>
    isVisibleToScreenReader(el)
  );
};

export const moveFocusTo = (element: HTMLElement | null, announcement?: string) => {
  if (!element) return;

  element.focus();

  if (announcement) {
    announceToScreenReader(announcement);
  }
};

export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g)?.map(Number) || [0, 0, 0];
    const [rRaw, gRaw, bRaw] = rgb;
    const r = typeof rRaw === "number" && !Number.isNaN(rRaw) ? rRaw : 0;
    const g = typeof gRaw === "number" && !Number.isNaN(gRaw) ? gRaw : 0;
    const b = typeof bRaw === "number" && !Number.isNaN(bRaw) ? bRaw : 0;
    const rSRGB = r / 255;
    const gSRGB = g / 255;
    const bSRGB = b / 255;
    const rLin = rSRGB <= 0.03928 ? rSRGB / 12.92 : Math.pow((rSRGB + 0.055) / 1.055, 2.4);
    const gLin = gSRGB <= 0.03928 ? gSRGB / 12.92 : Math.pow((gSRGB + 0.055) / 1.055, 2.4);
    const bLin = bSRGB <= 0.03928 ? bSRGB / 12.92 : Math.pow((bSRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
};

export const meetsContrastRequirements = (
  color1: string,
  color2: string,
  isLargeText: boolean = false
): boolean => {
  const ratio = getContrastRatio(color1, color2);
  return isLargeText ? ratio >= 3 : ratio >= 4.5;
};

export const escapeForScreenReader = (text: string): string => {
  return text
    .replaceAll("&", "and")
    .replaceAll("<", "less than")
    .replaceAll(">", "greater than")
    .replaceAll("/", "slash");
};

export const formatNumberForScreenReader = (num: number): string => {
  return new Intl.NumberFormat("en-US").format(num);
};

export const formatDateForScreenReader = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const handleKeyboardNavigation = (
  event: KeyboardEvent,
  handlers: {
    onEnter?: () => void;
    onSpace?: () => void;
    onEscape?: () => void;
    onArrowUp?: () => void;
    onArrowDown?: () => void;
    onArrowLeft?: () => void;
    onArrowRight?: () => void;
  }
) => {
  const { key } = event;

  switch (key) {
    case "Enter":
      handlers.onEnter?.();
      break;
    case " ":
    case "Space":
      handlers.onSpace?.();
      event.preventDefault();
      break;
    case "Escape":
    case "Esc":
      handlers.onEscape?.();
      break;
    case "ArrowUp":
    case "Up":
      handlers.onArrowUp?.();
      event.preventDefault();
      break;
    case "ArrowDown":
    case "Down":
      handlers.onArrowDown?.();
      event.preventDefault();
      break;
    case "ArrowLeft":
    case "Left":
      handlers.onArrowLeft?.();
      break;
    case "ArrowRight":
    case "Right":
      handlers.onArrowRight?.();
      break;
  }
};

export const prefersReducedMotion = (): boolean => {
  if (globalThis.window === undefined) {
    return false;
  }
  return globalThis.window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const prefersDarkMode = (): boolean => {
  if (globalThis.window === undefined) return false;
  return globalThis.window.matchMedia("(prefers-color-scheme: dark)").matches;
};

/**
 * Detect if user prefers high contrast
 */
export const prefersHighContrast = (): boolean => {
  if (globalThis.window === undefined) return false;
  return globalThis.window.matchMedia("(prefers-contrast: high)").matches;
};
