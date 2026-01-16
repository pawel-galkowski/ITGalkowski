import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";
import { LanguageProvider } from "./context/LanguageContext";

const RenderMock = () => (
  <LanguageProvider>
    <Home />
  </LanguageProvider>
);

// Mock child components
jest.mock("@/components/header/Header", () => {
  return function DummyHeader() {
    return <header data-testid="header-mock">Header</header>;
  };
});

jest.mock("@/components/footer/Footer", () => {
  return function DummyFooter() {
    return <footer data-testid="footer-mock">Footer</footer>;
  };
});

jest.mock("@/components/Experience/ExperienceTimeline", () => {
  return function DummyTimeline() {
    return <div data-testid="timeline-mock">Timeline</div>;
  };
});

jest.mock("@/components/faqs/Faqs", () => {
  return function DummyFaqs() {
    return <div data-testid="faqs-mock">FAQs</div>;
  };
});

jest.mock("@/components/imageTiles/ImageTiles", () => {
  return function DummyImageTiles() {
    return <div data-testid="imagetiles-mock">ImageTiles</div>;
  };
});

jest.mock("@/components/Sliders/LogoSlider", () => {
  return function DummyLogoSlider() {
    return <div data-testid="logoslider-mock">LogoSlider</div>;
  };
});

jest.mock("@/components/Sliders/ImgSlider", () => {
  return function DummyImgSlider() {
    return <div data-testid="imgslider-mock">ImgSlider</div>;
  };
});

jest.mock("@/sections/EntrySection", () => {
  return function DummyEntrySection() {
    return <section data-testid="entrysection-mock">EntrySection</section>;
  };
});

jest.mock("@/sections/InovationSection", () => {
  return function DummyInovationSection() {
    return <section data-testid="innovationsection-mock">InovationSection</section>;
  };
});

describe("Home Page", () => {
  it("renders main element", () => {
    const { container } = render(<RenderMock />);
    expect(container.querySelector("main")).toBeInTheDocument();
  });

  it("renders Header component", () => {
    render(<RenderMock />);
    expect(screen.getByTestId("header-mock")).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    render(<RenderMock />);
    expect(screen.getByTestId("footer-mock")).toBeInTheDocument();
  });

  it("renders EntrySection component", () => {
    render(<RenderMock />);
    expect(screen.getByTestId("entrysection-mock")).toBeInTheDocument();
  });

  it("renders InovationSection component", () => {
    render(<RenderMock />);
    expect(screen.getByTestId("innovationsection-mock")).toBeInTheDocument();
  });

  it("renders ExperienceTimeline component", () => {
    render(<RenderMock />);
    expect(screen.getByTestId("timeline-mock")).toBeInTheDocument();
  });

  it("renders ImageTiles component", () => {
    render(<RenderMock />);
    expect(screen.getByTestId("imagetiles-mock")).toBeInTheDocument();
  });

  it("renders ImgSlider component", () => {
    render(<RenderMock />);
    expect(screen.getByTestId("imgslider-mock")).toBeInTheDocument();
  });

  it("renders LogoSlider component", () => {
    render(<RenderMock />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it('displays "My work timeline" heading', () => {
    render(<RenderMock />);
    expect(screen.getByText("My work timeline")).toBeInTheDocument();
  });

  it("renders all major sections", () => {
    render(<RenderMock />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement.children.length).toBeGreaterThan(0);
  });
});
