import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import React, { ReactElement } from "react";

expect.extend(toHaveNoViolations);

/**
 * Render a component with accessibility testing utilities
 */
export function renderWithA11y(ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) {
  const rendered = rtlRender(ui, options);

  const checkA11y = async (axeOptions = {}) => {
    const results = await axe(rendered.container, axeOptions);
    expect(results).toHaveNoViolations();
  };

  return {
    ...rendered,
    checkA11y,
  };
}

/**
 * Check for accessibility violations in a DOM element
 */
export async function checkAccessibility(element: HTMLElement | Document) {
  const results = await axe(element as Element);
  return results;
}
