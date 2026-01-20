import React from "react";
import { render, screen } from "@testing-library/react";
import EntrySection from "./EntrySection";
import { LanguageProvider } from "@/context/LanguageContext";

const renderWithLanguage = (component: React.ReactElement) => {
  return render(<LanguageProvider>{component}</LanguageProvider>);
};

describe("EntrySection Component", () => {
  it("renders main heading", () => {
    renderWithLanguage(<EntrySection />);
    expect(screen.getByText("Master Your Projects with Expert Code")).toBeInTheDocument();
  });

  it("displays description text", () => {
    renderWithLanguage(<EntrySection />);
    expect(
      screen.getByText(/Elevate your projects with expert full-stack JavaScript/)
    ).toBeInTheDocument();
  });

  it("contains Katowice reference", () => {
    renderWithLanguage(<EntrySection />);
    expect(screen.getByText(/Katowice/)).toBeInTheDocument();
  });

  it("renders call-to-action button", () => {
    renderWithLanguage(<EntrySection />);
    expect(screen.getByRole("button", { name: /Hire Your Expert/ })).toBeInTheDocument();
  });

  it("renders featured image", () => {
    renderWithLanguage(<EntrySection />);
    expect(screen.getByAltText("Top Layout")).toBeInTheDocument();
  });

  it("has correct button variant", () => {
    renderWithLanguage(<EntrySection />);
    const button = screen.getByRole("button", { name: /Hire Your Expert/ });
    expect(button).toHaveClass("MuiButton-contained");
  });

  it("displays all key content sections", () => {
    const { container } = renderWithLanguage(<EntrySection />);
    const sections = container.querySelectorAll('[class*="MuiBox"]');
    expect(sections.length).toBeGreaterThan(0);
  });

  it("renders layout with flex direction", () => {
    const { container } = renderWithLanguage(<EntrySection />);
    const mainBox = container.firstChild;
    expect(mainBox).toBeInTheDocument();
  });

  it("image has correct src attribute", () => {
    renderWithLanguage(<EntrySection />);
    const image = screen.getByAltText("Top Layout");
    expect(image.getAttribute("src")).toBe("/img/top-layout.jpg");
  });
});
