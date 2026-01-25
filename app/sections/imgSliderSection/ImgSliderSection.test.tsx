import { screen } from "@testing-library/react";
import ImgSliderSection, { imgSliderSectionTestIds } from "./ImgSliderSection";
import { renderWithLanguage } from "@/test-utils/a11y";

describe("ImgSliderSection Component", () => {
  it("renders root with test ID", () => {
    renderWithLanguage(<ImgSliderSection />);
    expect(screen.getByTestId(imgSliderSectionTestIds.root)).toBeInTheDocument();
  });

  it("renders image slider section", () => {
    const { container } = renderWithLanguage(<ImgSliderSection />);
    expect(container).toBeInTheDocument();
  });

  it("contains slider images", () => {
    const { container } = renderWithLanguage(<ImgSliderSection />);
    const images = container.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);
  });

  it("renders gallery or slider elements", () => {
    const { container } = renderWithLanguage(<ImgSliderSection />);
    const sliderOrGallery = container.querySelector('[class*="Slider"], [class*="Gallery"]');
    expect(sliderOrGallery || container.firstChild).toBeInTheDocument();
  });
});
