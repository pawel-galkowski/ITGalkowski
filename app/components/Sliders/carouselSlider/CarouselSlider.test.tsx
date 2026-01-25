import { render, screen, fireEvent } from "@testing-library/react";
import CarouselSlider, { carouselSliderTestIds } from "./CarouselSlider";
import { SliderImageProps } from "../types";

describe("CarouselSlider", () => {
  const images: SliderImageProps[] = [
    { src: "img1.jpg", alt: "Image 1" },
    { src: "img2.jpg", alt: "Image 2" },
    { src: "img3.jpg", alt: "Image 3" },
  ];

  it("renders root and sliderBox", () => {
    render(<CarouselSlider images={images} />);
    expect(screen.getByTestId(carouselSliderTestIds.root)).toBeInTheDocument();
    expect(screen.getByTestId(carouselSliderTestIds.sliderBox)).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    render(<CarouselSlider images={images} />);
    expect(screen.getByTestId(carouselSliderTestIds.leftButton)).toBeInTheDocument();
    expect(screen.getByTestId(carouselSliderTestIds.rightButton)).toBeInTheDocument();
  });

  it("renders images in all positions", () => {
    render(<CarouselSlider images={images} />);
    // There should be 3 visible images (prev, main, next)
    const imgs = screen.getAllByTestId(carouselSliderTestIds.img);
    expect(imgs.length).toBe(3);
    // The main image is the second one
    expect(imgs[1]).toHaveAttribute("alt", "Image 1");
  });

  it("renders dot indicators", () => {
    render(<CarouselSlider images={images} />);
    expect(screen.getByTestId(carouselSliderTestIds.dotBox)).toBeInTheDocument();
    expect(screen.getAllByTestId(carouselSliderTestIds.dot).length).toBe(images.length);
  });

  it("navigates to next and previous image on button click", () => {
    render(<CarouselSlider images={images} />);
    const getMainImg = () => screen.getAllByTestId(carouselSliderTestIds.img)[1];
    expect(getMainImg()).toHaveAttribute("alt", "Image 1");

    fireEvent.click(screen.getByTestId(carouselSliderTestIds.rightButton));
    expect(getMainImg()).toHaveAttribute("alt", "Image 2");

    fireEvent.click(screen.getByTestId(carouselSliderTestIds.leftButton));
    expect(getMainImg()).toHaveAttribute("alt", "Image 1");
  });

  it("navigates to image on dot click", () => {
    render(<CarouselSlider images={images} />);
    const dots = screen.getAllByTestId(carouselSliderTestIds.dot);
    fireEvent.click(dots[2]!);
    const imgs = screen.getAllByTestId(carouselSliderTestIds.img);
    expect(imgs[1]).toHaveAttribute("alt", "Image 3");
  });
});
