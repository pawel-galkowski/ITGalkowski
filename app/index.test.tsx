import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";
import { LanguageProvider } from "./context/LanguageContext";

const RenderMock: React.FC = () => (
  <LanguageProvider>
    <Home />
  </LanguageProvider>
);

jest.mock("@/components/Header/Header", () => {
  return function DummyHeader() {
    return <header data-testid="header-mock">Header</header>;
  };
});

jest.mock("@/components/Footer/Footer", () => {
  return function DummyFooter() {
    return <footer data-testid="footer-mock">Footer</footer>;
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

jest.mock("@/sections/TilesSection", () => {
  return function DummyTilesSection() {
    return <section data-testid="tilessection-mock">TilesSection</section>;
  };
});

jest.mock("@/sections/ImgSliderSection", () => {
  return function DummyImgSliderSection() {
    return <section data-testid="imgslidersection-mock">ImgSliderSection</section>;
  };
});

jest.mock("@/sections/ExperienceSection", () => {
  return function DummyExperienceSection() {
    return <section data-testid="experiencesection-mock">ExperienceSection</section>;
  };
});

jest.mock("@/sections/EmpowerSolutionSection", () => {
  return function DummyEmpowerSolutionSection() {
    return <section data-testid="empowersection-mock">EmpowerSolutionSection</section>;
  };
});

jest.mock("@/sections/FAQSection", () => {
  return function DummyFAQSection() {
    return <section data-testid="faqsection-mock">FAQSection</section>;
  };
});

jest.mock("@/sections/ExplorePortfolio", () => {
  return function DummyExplorePortfolio() {
    return <section data-testid="portfolio-mock">ExplorePortfolio</section>;
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

  it("renders TilesSection component", () => {
    render(<RenderMock />);
    expect(screen.getByTestId("tilessection-mock")).toBeInTheDocument();
  });

  it("renders ImgSliderSection component", () => {
    render(<RenderMock />);
    expect(screen.getByTestId("imgslidersection-mock")).toBeInTheDocument();
  });

  it("renders ExperienceSection component", () => {
    render(<RenderMock />);
    expect(screen.getByTestId("experiencesection-mock")).toBeInTheDocument();
  });

  it("renders EmpowerSolutionSection component", () => {
    render(<RenderMock />);
    expect(screen.getByTestId("empowersection-mock")).toBeInTheDocument();
  });

  it("renders FAQSection component", () => {
    render(<RenderMock />);
    expect(screen.getByTestId("faqsection-mock")).toBeInTheDocument();
  });

  it("renders ExplorePortfolio component", () => {
    render(<RenderMock />);
    expect(screen.getByTestId("portfolio-mock")).toBeInTheDocument();
  });

  it("renders all major sections in correct order", () => {
    render(<RenderMock />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    // Check that all sections are rendered
    expect(screen.getByTestId("header-mock")).toBeInTheDocument();
    expect(screen.getByTestId("entrysection-mock")).toBeInTheDocument();
    expect(screen.getByTestId("innovationsection-mock")).toBeInTheDocument();
    expect(screen.getByTestId("tilessection-mock")).toBeInTheDocument();
    expect(screen.getByTestId("imgslidersection-mock")).toBeInTheDocument();
    expect(screen.getByTestId("experiencesection-mock")).toBeInTheDocument();
    expect(screen.getByTestId("empowersection-mock")).toBeInTheDocument();
    expect(screen.getByTestId("faqsection-mock")).toBeInTheDocument();
    expect(screen.getByTestId("portfolio-mock")).toBeInTheDocument();
    expect(screen.getByTestId("footer-mock")).toBeInTheDocument();
  });
});
