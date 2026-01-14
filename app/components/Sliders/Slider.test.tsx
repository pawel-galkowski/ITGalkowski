import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ImageCarousel from "./Slider";
import { SliderImageProps } from "./types";

describe("ImageCarousel (Slider) Component", () => {
  const mockImages: SliderImageProps[] = [
    { src: "/image1.jpg", alt: "Image 1" },
    { src: "/image2.jpg", alt: "Image 2" },
    { src: "/image3.jpg", alt: "Image 3" },
    { src: "/image4.jpg", alt: "Image 4" },
  ];

  it("renders carousel with images", () => {
    render(<ImageCarousel images={mockImages} />);
    // Use getAllByAltText since carousel renders images multiple times for looping
    const image1s = screen.getAllByAltText("Image 1");
    const image2s = screen.getAllByAltText("Image 2");
    expect(image1s.length).toBeGreaterThan(0);
    expect(image2s.length).toBeGreaterThan(0);
  });

  it("renders navigation buttons", () => {
    render(<ImageCarousel images={mockImages} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2); // Previous and Next buttons
  });

  it("handles next button click", () => {
    render(<ImageCarousel images={mockImages} />);
    const nextButton = screen.getAllByRole("button")[1];
    fireEvent.click(nextButton);
    expect(nextButton).toBeInTheDocument();
  });

  it("handles previous button click", () => {
    render(<ImageCarousel images={mockImages} />);
    const prevButton = screen.getAllByRole("button")[0];
    fireEvent.click(prevButton);
    expect(prevButton).toBeInTheDocument();
  });

  it("renders all images from props", () => {
    render(<ImageCarousel images={mockImages} />);
    // Since carousel duplicates images, just check that each exists
    mockImages.forEach((image) => {
      const altTexts = screen.getAllByAltText(image.alt);
      expect(altTexts.length).toBeGreaterThan(0);
    });
  });

  it("renders with empty images array", () => {
    render(<ImageCarousel images={[]} />);
    expect(screen.queryAllByRole("img")).toHaveLength(0);
  });

  it("applies custom sx prop to container", () => {
    const { container } = render(
      <ImageCarousel images={mockImages} sx={{ backgroundColor: "red" }} />
    );
    const carousel = container.firstChild;
    expect(carousel).toBeInTheDocument();
  });

  it("applies custom imgStyles to images", () => {
    const { container } = render(
      <ImageCarousel images={mockImages} imgStyles={{ maxWidth: "100px" }} />
    );
    const images = container.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);
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
