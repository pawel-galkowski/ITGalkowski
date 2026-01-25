import { screen } from "@testing-library/react";
import EmpowerSolutionSection, { empowerSolutionSectionTestIds } from "./EmpowerSolutionSection";
import { renderWithLanguage } from "@/test-utils/a11y";

describe("EmpowerSolutionSection Component", () => {
  it("renders root and container with test IDs", () => {
    renderWithLanguage(<EmpowerSolutionSection />);
    expect(screen.getByTestId(empowerSolutionSectionTestIds.root)).toBeInTheDocument();
    expect(screen.getByTestId(empowerSolutionSectionTestIds.container)).toBeInTheDocument();
  });

  it("renders content wrapper with test ID", () => {
    renderWithLanguage(<EmpowerSolutionSection />);
    expect(screen.getByTestId(empowerSolutionSectionTestIds.contentWrapper)).toBeInTheDocument();
  });

  it("renders image box and image with test IDs", () => {
    renderWithLanguage(<EmpowerSolutionSection />);
    expect(screen.getByTestId(empowerSolutionSectionTestIds.imageBox)).toBeInTheDocument();
    expect(screen.getByTestId(empowerSolutionSectionTestIds.image)).toBeInTheDocument();
    expect(screen.getByAltText("Empowering Digital Solutions")).toBeInTheDocument();
  });

  it("renders text box with test ID", () => {
    renderWithLanguage(<EmpowerSolutionSection />);
    expect(screen.getByTestId(empowerSolutionSectionTestIds.textBox)).toBeInTheDocument();
  });

  it("renders heading and body text", () => {
    renderWithLanguage(<EmpowerSolutionSection />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(0);
  });
});
