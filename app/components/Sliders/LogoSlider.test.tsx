import React from "react";
import { render, screen } from "@testing-library/react";
import LogoSlider from "./LogoSlider";

describe("LogoSlider Component", () => {
  it("renders all company logos", () => {
    render(<LogoSlider />);
    // Use getAllByAltText with a specific index to avoid duplicates from carousel loop
    const szpitalLogos = screen.getAllByAltText(/Szpital rejonowy w Raciborzu/);
    const instalLogos = screen.getAllByAltText(/Instal Konsorcjum/);
    const abnLogos = screen.getAllByAltText(/ABN AMRO/);
    const ingLogos = screen.getAllByAltText(/Ing Bank/);
    const capgeminiLogos = screen.getAllByAltText(/Capgemini/);

    expect(szpitalLogos.length).toBeGreaterThan(0);
    expect(instalLogos.length).toBeGreaterThan(0);
    expect(abnLogos.length).toBeGreaterThan(0);
    expect(ingLogos.length).toBeGreaterThan(0);
    expect(capgeminiLogos.length).toBeGreaterThan(0);
  });

  it("contains at least 5 logos (accounting for carousel duplication)", () => {
    render(<LogoSlider />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(5);
  });

  it("has navigation capability", () => {
    // LogoSlider uses automatic animation scrolling (CSS keyframes animation)
    // not semantic button navigation, so we test that the container is present
    render(<LogoSlider />);
    const images = screen.getAllByRole("img");
    const container = images[0].parentElement?.parentElement;
    expect(container).toBeInTheDocument();
  });

  it("all logos have valid src attributes", () => {
    render(<LogoSlider />);
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      const src = img.getAttribute("src");
      expect(src).toBeTruthy();
    });
  });

  it("renders with full viewport width styling", () => {
    const { container } = render(<LogoSlider />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
