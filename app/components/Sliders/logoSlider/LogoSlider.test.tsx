import { render, screen } from "@testing-library/react";
import LogoSlider, { logoSliderTestIds } from "./LogoSlider";

describe("LogoSlider", () => {
  it("renders root and track", () => {
    render(<LogoSlider />);
    expect(screen.getByTestId(logoSliderTestIds.root)).toBeInTheDocument();
    expect(screen.getByTestId(logoSliderTestIds.track)).toBeInTheDocument();
  });

  it("renders all logo boxes and images", () => {
    render(<LogoSlider />);
    // There are 5 images, so 10 logo boxes and 10 images (2 sets)
    const logoBoxes = screen.getAllByTestId(logoSliderTestIds.logoBox);
    const logoImgs = screen.getAllByTestId(logoSliderTestIds.logoImg);
    expect(logoBoxes.length).toBe(10);
    expect(logoImgs.length).toBe(10);
    // Check that at least one known alt is present
    expect(screen.getAllByAltText("Szpital rejonowy w Raciborzu Logo").length).toBe(2);
    expect(screen.getAllByAltText("Capgemini Polska Logo").length).toBe(2);
  });

  it("renders both grayscale variants", () => {
    render(<LogoSlider />);
    const logoImgs = screen.getAllByTestId(logoSliderTestIds.logoImg);
    // First 5 should have grayscale(50%), next 5 grayscale(100%)
    logoImgs.slice(0, 5).forEach(img => {
      expect(img).toHaveStyle("filter: grayscale(50%)");
    });
    logoImgs.slice(5).forEach(img => {
      expect(img).toHaveStyle("filter: grayscale(100%)");
    });
  });
});
