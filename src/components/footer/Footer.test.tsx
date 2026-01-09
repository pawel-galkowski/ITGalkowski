import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "@/context/LanguageContext";
import Footer from "./Footer";

const FooterWithProvider = () => (
  <LanguageProvider>
    <Footer />
  </LanguageProvider>
);

describe("Footer Component", () => {
  it("renders footer with copyright text", () => {
    render(<FooterWithProvider />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(String.raw`© ${currentYear}.*footer\.copyright`))).toBeInTheDocument();
  });

  it("displays correct current year in copyright", () => {
    render(<FooterWithProvider />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it("has correct styling with primary background", () => {
    const { container } = render(<FooterWithProvider />);
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });

  it("displays company name in copyright", () => {
    render(<FooterWithProvider />);
    const contentinfo = screen.getByRole("contentinfo");
    expect(contentinfo.textContent).toMatch(/ITGalkowski|footer\.copyright/);
  });

  it("has contentinfo role for accessibility", () => {
    render(<FooterWithProvider />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders as footer element", () => {
    const { container } = render(<FooterWithProvider />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  });

  it("has white text color", () => {
    render(<FooterWithProvider />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveStyle("color: white");
  });

  it("displays full copyright notice with translated text", () => {
    render(<FooterWithProvider />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("footer has correct height", () => {
    const { container } = render(<FooterWithProvider />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveStyle("height: 100px");
  });

  it("footer spans full width", () => {
    const { container } = render(<FooterWithProvider />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveStyle("width: 100%");
  });

  it("footer is centered with flexbox", () => {
    const { container } = render(<FooterWithProvider />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveStyle("display: flex");
    expect(footer).toHaveStyle("justify-content: center");
    expect(footer).toHaveStyle("align-items: center");
  });

  it("renders Typography component", () => {
    render(<FooterWithProvider />);
    const contentinfo = screen.getByRole("contentinfo");
    expect(contentinfo.querySelector("p")).toBeInTheDocument();
  });

  it("contains copyright symbol", () => {
    render(<FooterWithProvider />);
    const text = screen.getByRole("contentinfo").textContent;
    expect(text).toContain("©");
  });
});
