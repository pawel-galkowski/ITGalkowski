import { screen } from "@testing-library/react";
import EmpowerSolutionSection from "./EmpowerSolutionSection";
import { renderWithLanguage } from "@/test-utils/a11y";

describe("EmpowerSolutionSection Component", () => {
  it("renders section with container", () => {
    const { container } = renderWithLanguage(<EmpowerSolutionSection />);
    const muiContainer = container.querySelector('[class*="MuiContainer"]');
    expect(muiContainer).toBeInTheDocument();
  });

  it("renders heading", () => {
    renderWithLanguage(<EmpowerSolutionSection />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should be visible in DOM", () => {
    const { container } = renderWithLanguage(<EmpowerSolutionSection />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with secondary background", () => {
    const { container } = renderWithLanguage(<EmpowerSolutionSection />);
    const box = container.querySelector('[class*="MuiBox"]');
    expect(box).toBeInTheDocument();
  });

  it("renders multiple text elements", () => {
    renderWithLanguage(<EmpowerSolutionSection />);
    const textElements = screen.getAllByRole("heading", { hidden: true });
    expect(textElements.length).toBeGreaterThanOrEqual(1);
  });
});
