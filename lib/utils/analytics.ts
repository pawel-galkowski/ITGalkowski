/**
 * Google Analytics 4 Setup
 * 
 * This file provides utilities for Google Analytics tracking
 * to monitor SEO performance and user behavior.
 */

// Google Analytics pageview tracking
export const pageview = (url: string) => {
  if (globalThis.window?.gtag) {
    globalThis.window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
      page_path: url,
    });
  }
};

// Google Analytics event tracking
interface GtagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const event = ({ action, category, label, value }: GtagEvent) => {
  if (globalThis.window?.gtag) {
    globalThis.window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (globalThis.window?.gtag) {
    globalThis.window.gtag('event', eventName, params);
  }
};

// Track form submissions
export const trackFormSubmit = (formName: string, success: boolean) => {
  trackEvent('form_submit', {
    form_name: formName,
    success: success,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
  });
};

// Track video play (if applicable)
export const trackVideoPlay = (videoName: string) => {
  trackEvent('video_play', {
    video_name: videoName,
  });
};

// Track outbound link clicks
export const trackOutboundLink = (url: string) => {
  trackEvent('outbound_link_click', {
    url: url,
  });
};

// Track file downloads
export const trackDownload = (fileName: string) => {
  trackEvent('file_download', {
    file_name: fileName,
  });
};

// Track search queries (if you have a search feature)
export const trackSearch = (query: string) => {
  trackEvent('search', {
    search_term: query,
  });
};

// Track language changes
export const trackLanguageChange = (from: string, to: string) => {
  trackEvent('language_change', {
    from_language: from,
    to_language: to,
  });
};

// Track errors
export const trackError = (error: string, fatal: boolean = false) => {
  trackEvent('exception', {
    description: error,
    fatal: fatal,
  });
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}
