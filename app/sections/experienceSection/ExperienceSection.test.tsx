import { screen } from "@testing-library/react";
import ExperienceSection, { experienceSectionTestIds } from "./ExperienceSection";
import { renderWithLanguage } from "@/test-utils/a11y";

describe("ExperienceSection Component", () => {
  it("renders root with test ID", () => {
    renderWithLanguage(<ExperienceSection />);
    expect(screen.getByTestId(experienceSectionTestIds.root)).toBeInTheDocument();
  });

  it("renders container with test ID", () => {
    renderWithLanguage(<ExperienceSection />);
    expect(screen.getByTestId(experienceSectionTestIds.container)).toBeInTheDocument();
  });

  it("renders experience section with heading", () => {
    renderWithLanguage(<ExperienceSection />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("renders experience timeline component", () => {
    const { container } = renderWithLanguage(<ExperienceSection />);
    const timelineElement = container.querySelector('[class*="Timeline"]');
    expect(timelineElement).toBeInTheDocument();
  });

  it("contains at least one heading", () => {
    renderWithLanguage(<ExperienceSection />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(0);
  });
});
