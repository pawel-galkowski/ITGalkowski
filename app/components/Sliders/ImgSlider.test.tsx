import React from "react";
import { render, screen } from "@testing-library/react";
import ImgSlider from "./ImgSlider";

describe("ImgSlider Component", () => {
  it("renders ImgSlider with title", () => {
    render(<ImgSlider />);
    expect(screen.getByText("Proudly Supported by")).toBeInTheDocument();
  });

  it("renders all featured images", () => {
    render(<ImgSlider />);
    expect(screen.getByAltText("we build websites")).toBeInTheDocument();
    expect(screen.getByAltText("we build web applications")).toBeInTheDocument();
    expect(screen.getByAltText("clear intuitive code")).toBeInTheDocument();
    expect(screen.getByAltText("multiple device compatibility")).toBeInTheDocument();
    expect(screen.getByAltText("complex strategy made simple")).toBeInTheDocument();
    expect(screen.getByAltText("cutting-edge technology")).toBeInTheDocument();
  });

  it("contains correct number of images", () => {
    render(<ImgSlider />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(6);
  });

  it("has navigation buttons", () => {
    render(<ImgSlider />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2); // Previous and Next buttons
  });

  it("all images have valid src attributes", () => {
    render(<ImgSlider />);
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      const src = img.getAttribute("src");
      expect(src).toBeTruthy();
    });
  });

  it("renders with full viewport width styling", () => {
    const { container } = render(<ImgSlider />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
