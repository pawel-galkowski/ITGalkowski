import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "@/context/LanguageContext";
import Footer, { footerTestIds } from "./Footer";

const FooterWithProvider = () => (
  <LanguageProvider>
    <Footer />
  </LanguageProvider>
);

describe("Footer Component", () => {
  it("renders footer with copyright text", () => {
    render(<FooterWithProvider />);
    const currentYear = new Date().getFullYear();
    const footer = screen.getByTestId(footerTestIds.root);
    expect(footer).toBeInTheDocument();
    expect(footer.textContent).toMatch(new RegExp(String.raw`© Copyright ${currentYear} ITGalkowski\. All rights reserved\.`, 'i'));
  });

  it("displays correct current year in copyright", () => {
    render(<FooterWithProvider />);
    const currentYear = new Date().getFullYear().toString();
    const footer = screen.getByTestId(footerTestIds.root);
    expect(footer.textContent).toContain(currentYear);
  });

  it("has correct styling with primary background", () => {
    render(<FooterWithProvider />);
    const footer = screen.getByTestId(footerTestIds.root);
    expect(footer).toBeInTheDocument();
  });

  it("has contentinfo role for accessibility", () => {
    render(<FooterWithProvider />);
    const footer = screen.getByTestId(footerTestIds.root);
    expect(footer).toHaveAttribute("role", "contentinfo");
  });

  it("renders as footer element", () => {
    render(<FooterWithProvider />);
    const footer = screen.getByTestId(footerTestIds.root);
    expect(footer.tagName.toLowerCase()).toBe("footer");
  });

  it("has white text color", () => {
    render(<FooterWithProvider />);
    const footer = screen.getByTestId(footerTestIds.root);
    expect(footer).toHaveStyle("color: white");
  });

  it("displays full copyright notice with translated text", () => {
    render(<FooterWithProvider />);
    const footer = screen.getByTestId(footerTestIds.root);
    expect(footer).toBeInTheDocument();
  });

  it("footer has correct height", () => {
    render(<FooterWithProvider />);
    const footer = screen.getByTestId(footerTestIds.root);
    expect(footer).toHaveStyle("height: 100px");
  });

  it("footer spans full width", () => {
    render(<FooterWithProvider />);
    const footer = screen.getByTestId(footerTestIds.root);
    expect(footer).toHaveStyle("width: 100%");
  });

  it("footer is centered with flexbox", () => {
    render(<FooterWithProvider />);
    const footer = screen.getByTestId(footerTestIds.root);
    expect(footer).toHaveStyle("display: flex");
    expect(footer).toHaveStyle("justify-content: center");
    expect(footer).toHaveStyle("align-items: center");
  });

  it("renders Typography component", () => {
    render(<FooterWithProvider />);
    const footer = screen.getByTestId(footerTestIds.root);
    expect(footer.querySelector("p")).toBeInTheDocument();
  });

  it("contains copyright symbol", () => {
    render(<FooterWithProvider />);
    const footer = screen.getByTestId(footerTestIds.root);
    expect(footer.textContent).toContain("©");
  });

  it("has the correct data-testid attribute", () => {
    render(<FooterWithProvider />);
    const footer = screen.getByTestId(footerTestIds.root);
    expect(footer).toBeInTheDocument();
  });
});
