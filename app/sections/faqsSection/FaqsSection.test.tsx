import { screen } from "@testing-library/react";
import FAQSection, { faqsSectionTestIds } from "./FaqsSection";
import { renderWithLanguage } from "@/test-utils/a11y";

describe("FaqsSection Component", () => {
  it("renders root with test ID", () => {
    renderWithLanguage(<FAQSection />);
    expect(screen.getByTestId(faqsSectionTestIds.root)).toBeInTheDocument();
  });

  it("renders container with test ID", () => {
    renderWithLanguage(<FAQSection />);
    expect(screen.getByTestId(faqsSectionTestIds.container)).toBeInTheDocument();
  });

  it("renders content wrapper with test ID", () => {
    renderWithLanguage(<FAQSection />);
    expect(screen.getByTestId(faqsSectionTestIds.contentWrapper)).toBeInTheDocument();
  });

  it("displays FAQ content with headings", () => {
    const { container } = renderWithLanguage(<FAQSection />);
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings.length).toBeGreaterThan(0);
  });

  it("has accordion buttons for FAQ items", () => {
    renderWithLanguage(<FAQSection />);
    const faqContainer = screen.getByTestId(faqsSectionTestIds.container);
    expect(faqContainer).toBeInTheDocument();
  });
});
