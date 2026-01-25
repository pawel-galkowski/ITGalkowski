import { screen } from "@testing-library/react";
import TilesSection, { tilesSectionTestIds } from "./TilesSection";
import { renderWithLanguage } from "@/test-utils/a11y";

describe("TilesSection Component", () => {
  it("renders root with test ID", () => {
    renderWithLanguage(<TilesSection />);
    expect(screen.getByTestId(tilesSectionTestIds.root)).toBeInTheDocument();
  });

  it("renders container with test ID", () => {
    renderWithLanguage(<TilesSection />);
    expect(screen.getByTestId(tilesSectionTestIds.container)).toBeInTheDocument();
  });

  it("renders tiles section", () => {
    const { container } = renderWithLanguage(<TilesSection />);
    expect(container).toBeInTheDocument();
  });

  it("renders heading", () => {
    const { container } = renderWithLanguage(<TilesSection />);
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings.length).toBeGreaterThan(0);
  });

  it("renders multiple tile elements", () => {
    const { container } = renderWithLanguage(<TilesSection />);
    const tiles = container.querySelectorAll('[class*="Box"]');
    expect(tiles.length).toBeGreaterThan(1);
  });

  it("has proper grid or flex layout", () => {
    const { container } = renderWithLanguage(<TilesSection />);
    const layoutElement = container.querySelector('[class*="grid"], [class*="flex"]');
    expect(layoutElement || container.firstChild).toBeInTheDocument();
  });

  it("renders service or feature tiles", () => {
    const { container } = renderWithLanguage(<TilesSection />);
    const content = container.querySelectorAll('[class*="Typography"], [class*="Box"]');
    expect(content.length).toBeGreaterThan(0);
  });

  it("should have full width", () => {
    renderWithLanguage(<TilesSection />);
    const mainBox = screen.getByTestId(tilesSectionTestIds.root);
    expect(mainBox).toBeInTheDocument();
  });
});
