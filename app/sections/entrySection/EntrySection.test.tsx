import React from "react";
import { render, screen } from "@testing-library/react";
import EntrySection, { entrySectionTestIds } from "./EntrySection";
import { LanguageProvider } from "../../context/LanguageContext";
import { en } from "../../i18n/en";

const renderWithLanguage = (component: React.ReactElement) => {
  return render(<LanguageProvider>{component}</LanguageProvider>);
};

describe("EntrySection Component", () => {
  it("renders root with test ID", () => {
    renderWithLanguage(<EntrySection />);
    expect(screen.getByTestId(entrySectionTestIds.root)).toBeInTheDocument();
  });

  it("renders text box with test ID", () => {
    renderWithLanguage(<EntrySection />);
    expect(screen.getByTestId(entrySectionTestIds.textBox)).toBeInTheDocument();
  });

  it("renders main heading", () => {
    renderWithLanguage(<EntrySection />);
    expect(screen.getByText(en.entrySection.title)).toBeInTheDocument();
  });

  it("displays description text", () => {
    renderWithLanguage(<EntrySection />);
    expect(screen.getByText(en.entrySection.body)).toBeInTheDocument();
  });

  it("contains translated body content", () => {
    renderWithLanguage(<EntrySection />);
    expect(screen.getByTestId(entrySectionTestIds.textBox)).toHaveTextContent(
      en.entrySection.body
    );
  });

  it("renders call-to-action button with test ID", () => {
    renderWithLanguage(<EntrySection />);
    expect(screen.getByTestId(entrySectionTestIds.button)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: new RegExp(en.entrySection.button, "i") })
    ).toBeInTheDocument();
  });

  it("renders featured image with test ID", () => {
    renderWithLanguage(<EntrySection />);
    expect(screen.getByTestId(entrySectionTestIds.image)).toBeInTheDocument();
    expect(screen.getByTestId(entrySectionTestIds.image)).toHaveAttribute("alt");
  });

  it("has correct button variant", () => {
    renderWithLanguage(<EntrySection />);
    const button = screen.getByRole("button", {
      name: new RegExp(en.entrySection.button, "i"),
    });
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
    const image = screen.getByTestId(entrySectionTestIds.image);
    expect(image.getAttribute("src")).toBe("/img/top-layout.jpg");
  });
});
