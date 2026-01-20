import React from "react";
import { render, screen } from "@testing-library/react";
import Faqs from "./Faqs";
import { LanguageProvider } from "@/context/LanguageContext";

const renderWithLanguage = (component: React.ReactElement) => {
  return render(<LanguageProvider>{component}</LanguageProvider>);
};

describe("Faqs Component", () => {
  it("renders accordion component", () => {
    renderWithLanguage(<Faqs />);
    // Check for at least one accordion visible
    const accordions = screen.getAllByRole("button");
    expect(accordions.length).toBeGreaterThan(0);
  });

  it("displays first FAQ question", () => {
    renderWithLanguage(<Faqs />);
    expect(
      screen.getByText(/What services do you offer as a full-stack JavaScript engineer/)
    ).toBeInTheDocument();
  });

  it("displays all FAQ questions", () => {
    renderWithLanguage(<Faqs />);
    expect(
      screen.getByText(/What services do you offer as a full-stack JavaScript engineer/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Which JavaScript frameworks do you specialize in/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Can you work remotely from Katowice/)).toBeInTheDocument();
    expect(screen.getByText(/Do you handle the entire development process/)).toBeInTheDocument();
    expect(screen.getByText(/What is your approach to project management/)).toBeInTheDocument();
  });

  it("contains JavaScript-related content", () => {
    renderWithLanguage(<Faqs />);
    const jsElements = screen.queryAllByText(/JavaScript/);
    expect(jsElements.length).toBeGreaterThan(0);
  });

  it("contains Katowice reference", () => {
    renderWithLanguage(<Faqs />);
    const katowiceElements = screen.queryAllByText(/Katowice/);
    expect(katowiceElements.length).toBeGreaterThan(0);
  });

  it("contains development process mention", () => {
    renderWithLanguage(<Faqs />);
    expect(screen.getByText(/development lifecycle/)).toBeInTheDocument();
  });

  it("contains agile methodologies mention", () => {
    renderWithLanguage(<Faqs />);
    expect(screen.getByText(/agile methodologies/)).toBeInTheDocument();
  });
});
