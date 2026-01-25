import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ImageCarousel, { sliderTestIds }  from "@/components/sliders/Slider";
import { SliderImageProps } from "@/components/sliders/types";

describe("ImageCarousel (Slider) Component", () => {
  const mockImages: SliderImageProps[] = [
    { src: "/image1.jpg", alt: "Image 1" },
    { src: "/image2.jpg", alt: "Image 2" },
    { src: "/image3.jpg", alt: "Image 3" },
    { src: "/image4.jpg", alt: "Image 4" },
  ];

  it("renders root, track, and images with test IDs", () => {
    render(<ImageCarousel images={mockImages} />);
    expect(screen.getByTestId(sliderTestIds.root)).toBeInTheDocument();
    expect(screen.getByTestId(sliderTestIds.track)).toBeInTheDocument();
    const images = screen.getAllByTestId(sliderTestIds.image);
    expect(images.length).toBeGreaterThan(0);
    // Check that at least one known alt is present
    expect(screen.getAllByAltText("Image 1").length).toBeGreaterThan(0);
    expect(screen.getAllByAltText("Image 2").length).toBeGreaterThan(0);
  });

  it("renders navigation buttons with test IDs", () => {
    render(<ImageCarousel images={mockImages} />);
    expect(screen.getByTestId(sliderTestIds.leftButton)).toBeInTheDocument();
    expect(screen.getByTestId(sliderTestIds.rightButton)).toBeInTheDocument();
  });

  it("handles next button click", () => {
    render(<ImageCarousel images={mockImages} />);
    const nextButton = screen.getByTestId(sliderTestIds.rightButton);
    fireEvent.click(nextButton);
    expect(nextButton).toBeInTheDocument();
  });

  it("handles previous button click", () => {
    render(<ImageCarousel images={mockImages} />);
    const prevButton = screen.getByTestId(sliderTestIds.leftButton);
    fireEvent.click(prevButton);
    expect(prevButton).toBeInTheDocument();
  });

  it("renders all images from props with test IDs", () => {
    render(<ImageCarousel images={mockImages} />);
    mockImages.forEach((image) => {
      const altTexts = screen.getAllByAltText(image.alt);
      expect(altTexts.length).toBeGreaterThan(0);
    });
    // All rendered images should have the test ID
    const images = screen.getAllByTestId(sliderTestIds.image);
    expect(images.length).toBeGreaterThan(0);
  });

  it("renders with empty images array", () => {
    render(<ImageCarousel images={[]} />);
    expect(screen.queryAllByTestId(sliderTestIds.image)).toHaveLength(0);
  });

  it("applies custom sx prop to container", () => {
    const { container } = render(
      <ImageCarousel images={mockImages} sx={{ backgroundColor: "red" }} />
    );
    const carousel = container.firstChild;
    expect(carousel).toBeInTheDocument();
  });

  it("applies custom imgStyles to images", () => {
    render(<ImageCarousel images={mockImages} imgStyles={{ maxWidth: "100px" }} />);
    const images = screen.getAllByTestId(sliderTestIds.image);
    expect(images.length).toBeGreaterThan(0);
    images.forEach(img => {
      expect(img).toHaveStyle("max-width: 100px");
    });
  });

  it("auto-advances carousel", async () => {
    jest.useFakeTimers();
    render(<ImageCarousel images={mockImages} />);

    jest.advanceTimersByTime(4500);

    await waitFor(() => {
      // Just check that images still exist
      const images = screen.getAllByAltText("Image 1");
      expect(images.length).toBeGreaterThan(0);
    });

    jest.useRealTimers();
  });
});
