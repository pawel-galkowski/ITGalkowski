import React from "react";
import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "../../context/LanguageContext";
import ImageTiles, { imageTilesTestIds } from ".";
import enTiles from "./data/en.json";

const renderWithLanguage = (component: React.ReactElement) => {
  return render(<LanguageProvider>{component}</LanguageProvider>);
};

describe("ImageTiles Component", () => {
  it("renders root with data-testid", () => {
    renderWithLanguage(<ImageTiles />);
    expect(screen.getByTestId(imageTilesTestIds.root)).toBeInTheDocument();
  });

  it("renders at least one image with data-testid", () => {
    renderWithLanguage(<ImageTiles />);
    const images = screen.getAllByTestId(imageTilesTestIds.image);
    expect(images.length).toBeGreaterThan(0);
  });

  it("renders at least one tile with data-testid", () => {
    renderWithLanguage(<ImageTiles />);
    const tiles = screen.getAllByTestId(imageTilesTestIds.tile);
    expect(tiles.length).toBeGreaterThan(0);
  });

  it("displays all service titles", () => {
    renderWithLanguage(<ImageTiles />);
    enTiles.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it("displays all service descriptions", () => {
    renderWithLanguage(<ImageTiles />);
    enTiles.forEach((item) => {
      expect(screen.getByText(item.content)).toBeInTheDocument();
    });
  });

  it("renders correct number of image tiles", () => {
    renderWithLanguage(<ImageTiles />);
    const tiles = screen.getAllByTestId(imageTilesTestIds.tile);
    expect(tiles.length).toBe(enTiles.length);
  });

  it("displays images with correct alt text", () => {
    renderWithLanguage(<ImageTiles />);
    enTiles.forEach((item) => {
      expect(screen.getByAltText(item.title)).toBeInTheDocument();
    });
  });

  it("images have proper src attributes", () => {
    renderWithLanguage(<ImageTiles />);
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      const src = img.getAttribute("src");
      expect(src).toBeTruthy();
      expect(src).toContain("media.gettyimages.com");
    });
  });

  it("displays service bar with title and subtitle", () => {
    renderWithLanguage(<ImageTiles />);
    const titleElements = screen.getAllByText(/Development|Design|Integration|Consultation/);
    expect(titleElements.length).toBeGreaterThan(0);
  });
});
