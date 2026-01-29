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
    // Only the first set has alt text, the duplicates have empty alt
    expect(screen.getAllByAltText("Szpital rejonowy w Raciborzu Logo").length).toBe(1);
    expect(screen.getAllByAltText("Capgemini Polska Logo").length).toBe(1);
  });

  it("renders all logos with grayscale(0%)", () => {
    render(<LogoSlider />);
    const logoImgs = screen.getAllByTestId(logoSliderTestIds.logoImg);
    logoImgs.forEach(img => {
      expect(img).toHaveStyle("filter: grayscale(0%)");
    });
  });
});
