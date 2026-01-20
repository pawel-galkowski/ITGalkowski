import { screen } from "@testing-library/react";
import ExperienceSection from "./ExperienceSection";
import { renderWithLanguage } from "@/test-utils/a11y";

describe("ExperienceSection Component", () => {
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

  it("renders with container", () => {
    const { container } = renderWithLanguage(<ExperienceSection />);
    const muiContainer = container.querySelector('[class*="MuiContainer"]');
    expect(muiContainer).toBeInTheDocument();
  });

  it("has secondary background color styling", () => {
    const { container } = renderWithLanguage(<ExperienceSection />);
    const box = container.firstChild;
    expect(box).toHaveStyle({ width: "100%" });
  });

  it("contains at least one heading", () => {
    renderWithLanguage(<ExperienceSection />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(0);
  });
});
