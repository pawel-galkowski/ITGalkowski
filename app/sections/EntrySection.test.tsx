import React from "react";
import { render, screen } from "@testing-library/react";
import EntrySection from "./EntrySection";

describe("EntrySection Component", () => {
  it("renders main heading", () => {
    render(<EntrySection />);
    expect(screen.getByText("Master Your Projects with Expert Code")).toBeInTheDocument();
  });

  it("displays description text", () => {
    render(<EntrySection />);
    expect(
      screen.getByText(/Elevate your projects with expert full-stack JavaScript/)
    ).toBeInTheDocument();
  });

  it("contains Katowice reference", () => {
    render(<EntrySection />);
    expect(screen.getByText(/Katowice/)).toBeInTheDocument();
  });

  it("renders call-to-action button", () => {
    render(<EntrySection />);
    expect(screen.getByRole("button", { name: /Hire Your Expert/ })).toBeInTheDocument();
  });

  it("renders featured image", () => {
    render(<EntrySection />);
    expect(screen.getByAltText("Top Layout")).toBeInTheDocument();
  });

  it("has correct button variant", () => {
    render(<EntrySection />);
    const button = screen.getByRole("button", { name: /Hire Your Expert/ });
    expect(button).toHaveClass("MuiButton-contained");
  });

  it("displays all key content sections", () => {
    const { container } = render(<EntrySection />);
    const sections = container.querySelectorAll('[class*="MuiBox"]');
    expect(sections.length).toBeGreaterThan(0);
  });

  it("renders layout with flex direction", () => {
    const { container } = render(<EntrySection />);
    const mainBox = container.firstChild;
    expect(mainBox).toBeInTheDocument();
  });

  it("image has correct src attribute", () => {
    render(<EntrySection />);
    const image = screen.getByAltText("Top Layout");
    expect(image.getAttribute("src")).toBe("/img/top-layout.jpg");
  });
});
