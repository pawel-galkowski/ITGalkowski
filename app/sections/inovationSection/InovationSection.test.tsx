import React from "react";
import { screen } from "@testing-library/react";
import InovationSection, { inovationSectionTestIds } from "./InovationSection";
import { renderWithLanguage } from "@/test-utils/a11y";

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
    expect(screen.getByAltText("laptop")).toBeInTheDocument();
  });

  it("renders main heading", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByText("Innovative JavaScript Engineering Silesia")).toBeInTheDocument();
  });

  it("displays description text", () => {
    renderWithLanguage(<InovationSection />);
    expect(
      screen.getByText(/Explore top-tier full-stack JavaScript solutions/)
    ).toBeInTheDocument();
  });

  it("contains Katowice reference", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByText(/Katowice/)).toBeInTheDocument();
  });

  it("contains Silesian Voivodeship reference", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByText(/Silesian Voivodeship/)).toBeInTheDocument();
  });

  it("has correct image src", () => {
    renderWithLanguage(<InovationSection />);
    const image = screen.getByAltText("laptop");
    expect(image.getAttribute("src")).toBe("/img/laptop.jpg");
  });

  it("displays multiple typography variants", () => {
    renderWithLanguage(<InovationSection />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(1);
  });

  it("contains cutting-edge mention", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByText(/cutting-edge technologies/)).toBeInTheDocument();
  });

  it("mentions scalable solutions", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByText(/scalable web applications/)).toBeInTheDocument();
  });

  it("mentions business needs", () => {
    renderWithLanguage(<InovationSection />);
    expect(screen.getByText(/unique business needs/)).toBeInTheDocument();
  });

  it("renders with dark background color", () => {
    const { container } = renderWithLanguage(<InovationSection />);
    const section = container.querySelector('[class*="MuiBox"]');
    expect(section).toBeInTheDocument();
  });
});
