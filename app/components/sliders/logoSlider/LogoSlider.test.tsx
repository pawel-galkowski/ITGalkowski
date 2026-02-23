import { render, screen } from "@testing-library/react";
import LogoSlider, { logoSliderTestIds } from "./LogoSlider";

const expectedLogoAlts = [
  "Szpital rejonowy w Raciborzu Logo",
  "Capgemini Polska Logo",
];

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
    expectedLogoAlts.forEach((altText) => {
      expect(screen.getAllByAltText(altText).length).toBe(1);
    });
  });

  it("renders all logos with grayscale(0%)", () => {
    render(<LogoSlider />);
    const logoImgs = screen.getAllByTestId(logoSliderTestIds.logoImg);
    logoImgs.forEach((img) => {
      expect(img).toHaveStyle("filter: grayscale(0%)");
    });
  });
});
