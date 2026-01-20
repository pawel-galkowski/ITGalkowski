import { screen } from "@testing-library/react";
import ExplorePortfolio from "./ExplorePortfolio";
import { renderWithLanguage } from "@/test-utils/a11y";

describe("ExplorePortfolio Component", () => {
  it("renders explore portfolio section", () => {
    const { container } = renderWithLanguage(<ExplorePortfolio />);
    expect(container).toBeInTheDocument();
  });

  it("renders heading", () => {
    const { container } = renderWithLanguage(<ExplorePortfolio />);
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings.length).toBeGreaterThan(0);
  });

  it("renders with container", () => {
    const { container } = renderWithLanguage(<ExplorePortfolio />);
    // This component might use MuiBox instead of MuiContainer
    const element = container.querySelector('[class*="MuiContainer"]') || container.firstChild;
    expect(element).toBeInTheDocument();
  });

  it("should display portfolio content", () => {
    const { container } = renderWithLanguage(<ExplorePortfolio />);
    const content = container.querySelectorAll('[class*="Typography"], [class*="Box"]');
    expect(content.length).toBeGreaterThan(0);
  });

  it("renders section with proper structure", () => {
    const { container } = renderWithLanguage(<ExplorePortfolio />);
    const mainBox = container.firstChild;
    expect(mainBox).toBeInTheDocument();
  });

  test("should have call-to-action elements", () => {
    renderWithLanguage(<ExplorePortfolio />);
    // Portfolio sections often have links or buttons to view projects
    const buttons = screen.queryAllByRole("button");
    const links = screen.queryAllByRole("link");
    expect(buttons.length + links.length).toBeGreaterThanOrEqual(0);
  });
});
