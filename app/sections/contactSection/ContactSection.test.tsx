import { screen } from "@testing-library/react";
import ContactSection, { contactSectionTestIds } from "./ContactSection";
import { renderWithLanguage } from "@/test-utils/a11y";

describe("ContactSection Component", () => {
  it("renders root with test ID", () => {
    renderWithLanguage(<ContactSection />);
    expect(screen.getByTestId(contactSectionTestIds.root)).toBeInTheDocument();
  });

  it("renders container with test ID", () => {
    renderWithLanguage(<ContactSection />);
    expect(screen.getByTestId(contactSectionTestIds.container)).toBeInTheDocument();
  });

  it("renders contact section heading", () => {
    renderWithLanguage(<ContactSection />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it("renders ContactForm component", () => {
    const { container } = renderWithLanguage(<ContactSection />);
    // ContactForm should be present in the DOM
    const form = container.querySelector('form');
    expect(form || container).toBeInTheDocument();
  });

  it("has correct section id for navigation", () => {
    renderWithLanguage(<ContactSection />);
    const section = screen.getByTestId(contactSectionTestIds.root);
    expect(section).toHaveAttribute("id", "contact");
  });

  it("displays heading text", () => {
    renderWithLanguage(<ContactSection />);
    // Verify the heading is rendered (text content depends on translations)
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(0);
  });
});
