import React from "react";
import { screen } from "@testing-library/react";
import InovationSection, { inovationSectionTestIds } from "./InovationSection";
import { renderWithLanguage } from "../../test-utils/a11y";
import { en } from "../../i18n/en";

describe("InovationSection Component", () => {
  it("renders root with test ID", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByTestId(inovationSectionTestIds.root)).toBeInTheDocument();
  });

  it("renders container with test ID", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByTestId(inovationSectionTestIds.container)).toBeInTheDocument();
  });

  it("renders text box with test ID", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByTestId(inovationSectionTestIds.textBox)).toBeInTheDocument();
  });

  it("renders image with test ID", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByTestId(inovationSectionTestIds.image)).toBeInTheDocument();
    expect(screen.getByTestId(inovationSectionTestIds.image)).toHaveAttribute("alt");
  });

  it("renders main heading", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByText(en.inovationSection.title)).toBeInTheDocument();
  });

  it("displays description text", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByText(en.inovationSection.body)).toBeInTheDocument();
  });

  it("contains modern TypeScript architecture reference", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByTestId(inovationSectionTestIds.textBox)).toHaveTextContent(/TypeScript/i);
  });

  it("contains cloud platforms reference", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByText(/cloud platforms/i)).toBeInTheDocument();
  });

  it("has correct image src", () => {
    renderWithLanguage(<InovationSection />);
    const image = screen.getByTestId(inovationSectionTestIds.image);
    expect(image.getAttribute("src")).toBe("/img/laptop.jpg");
  });

  it("displays multiple typography variants", () => {
    renderWithLanguage(<InovationSection />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(1);
  });

  it("contains cutting-edge mention", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByTestId(inovationSectionTestIds.textBox)).toHaveTextContent(/cutting/i);
  });

  it("mentions scalable solutions", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByText(/scalable, maintainable applications/i)).toBeInTheDocument();
  });

  it("mentions business needs", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByText(/business needs/i)).toBeInTheDocument();
  });

  it("renders with dark background color", () => {
    const { container } = renderWithLanguage(<InovationSection />);
    const section = container.querySelector('[class*="MuiBox"]');
    expect(section).toBeInTheDocument();
  });
});
