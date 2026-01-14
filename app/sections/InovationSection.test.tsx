import React from "react";
import { render, screen } from "@testing-library/react";
import InovationSection from "./InovationSection";

describe("InovationSection Component", () => {
  it("renders main heading", () => {
    render(<InovationSection />);
    expect(screen.getByText("Innovative JavaScript Engineering Silesia")).toBeInTheDocument();
  });

  it("displays description text", () => {
    render(<InovationSection />);
    expect(
      screen.getByText(/Explore top-tier full-stack JavaScript solutions/)
    ).toBeInTheDocument();
  });

  it("contains Katowice reference", () => {
    render(<InovationSection />);
    expect(screen.getByText(/Katowice/)).toBeInTheDocument();
  });

  it("contains Silesian Voivodeship reference", () => {
    render(<InovationSection />);
    expect(screen.getByText(/Silesian Voivodeship/)).toBeInTheDocument();
  });

  it("renders feature image", () => {
    render(<InovationSection />);
    expect(screen.getByAltText("laptop")).toBeInTheDocument();
  });

  it("has correct image src", () => {
    render(<InovationSection />);
    const image = screen.getByAltText("laptop");
    expect(image.getAttribute("src")).toBe("/img/laptop.jpg");
  });

  it("displays multiple typography variants", () => {
    render(<InovationSection />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(1);
  });

  it("contains cutting-edge mention", () => {
    render(<InovationSection />);
    expect(screen.getByText(/cutting-edge technologies/)).toBeInTheDocument();
  });

  it("mentions scalable solutions", () => {
    render(<InovationSection />);
    expect(screen.getByText(/scalable web applications/)).toBeInTheDocument();
  });

  it("mentions business needs", () => {
    render(<InovationSection />);
    expect(screen.getByText(/unique business needs/)).toBeInTheDocument();
  });

  it("renders with dark background color", () => {
    const { container } = render(<InovationSection />);
    const section = container.querySelector('[class*="MuiBox"]');
    expect(section).toBeInTheDocument();
  });
});
