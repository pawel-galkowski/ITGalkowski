import { screen } from "@testing-library/react";
import ExplorePortfolio, { explorePortfolioTestIds } from "./ExplorePortfolio";
import { renderWithLanguage } from "@/test-utils/a11y";

describe("ExplorePortfolio Component", () => {
  it("renders root with test ID", () => {
    renderWithLanguage(<ExplorePortfolio />);
    expect(screen.getByTestId(explorePortfolioTestIds.root)).toBeInTheDocument();
  });

  it("renders overlay with test ID", () => {
    renderWithLanguage(<ExplorePortfolio />);
    expect(screen.getByTestId(explorePortfolioTestIds.overlay)).toBeInTheDocument();
  });

  it("renders background image with test ID", () => {
    renderWithLanguage(<ExplorePortfolio />);
    expect(screen.getByTestId(explorePortfolioTestIds.backgroundImage)).toBeInTheDocument();
  });

  it("renders button with test ID", () => {
    renderWithLanguage(<ExplorePortfolio />);
    expect(screen.getByTestId(explorePortfolioTestIds.button)).toBeInTheDocument();
  });

  it("renders heading", () => {
    const { container } = renderWithLanguage(<ExplorePortfolio />);
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings.length).toBeGreaterThan(0);
  });

  it("should display portfolio content", () => {
    const { container } = renderWithLanguage(<ExplorePortfolio />);
    const content = container.querySelectorAll('[class*="Typography"], [class*="Box"]');
    expect(content.length).toBeGreaterThan(0);
  });

  test("should have call-to-action link", () => {
    renderWithLanguage(<ExplorePortfolio />);
    const button = screen.getByTestId(explorePortfolioTestIds.button);
    expect(button).toHaveAttribute("href", "https://github.com/pawel-galkowski");
  });
});
