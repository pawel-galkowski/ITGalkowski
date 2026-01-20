import { screen } from "@testing-library/react";
import ExperienceTimeline from "./ExperienceTimeline";
import { renderWithLanguage } from "@/test-utils/a11y";

// Mock the data files
jest.mock("./en.json", () => [
  {
    date: "2020 - 2021",
    position: "Junior Developer",
    company: "Tech Company",
    summary: "<p>Worked on web development projects</p>",
  },
  {
    date: "2021 - 2023",
    position: "Mid-level Developer",
    company: "Growth Startup",
    summary: "<p>Led frontend development initiatives</p>",
  },
]);

jest.mock("./pl.json", () => [
  {
    date: "2020 - 2021",
    position: "Junior Developer",
    company: "Tech Company",
    summary: "<p>Worked on web development projects</p>",
  },
  {
    date: "2021 - 2023",
    position: "Mid-level Developer",
    company: "Growth Startup",
    summary: "<p>Led frontend development initiatives</p>",
  },
]);

describe("ExperienceTimeline Component", () => {
  it("renders timeline component", () => {
    const { container } = renderWithLanguage(<ExperienceTimeline />);
    // MUI Timeline uses a container with class containing 'Timeline'
    const timelineElement =
      container.querySelector('[class*="MuiTimeline"]') || container.firstChild;
    expect(timelineElement).toBeInTheDocument();
  });

  it("displays experience entries", () => {
    renderWithLanguage(<ExperienceTimeline />);
    expect(screen.getByText("Junior Developer")).toBeInTheDocument();
    expect(screen.getByText("Mid-level Developer")).toBeInTheDocument();
  });

  it("displays company names", () => {
    renderWithLanguage(<ExperienceTimeline />);
    expect(screen.getByText("Tech Company")).toBeInTheDocument();
    expect(screen.getByText("Growth Startup")).toBeInTheDocument();
  });

  it("displays dates", () => {
    renderWithLanguage(<ExperienceTimeline />);
    expect(screen.getByText("2020 - 2021")).toBeInTheDocument();
    expect(screen.getByText("2021 - 2023")).toBeInTheDocument();
  });

  it("renders timeline items", () => {
    const { container } = renderWithLanguage(<ExperienceTimeline />);
    // MUI TimelineItem elements
    const timelineItems = container.querySelectorAll('[class*="MuiTimelineItem"]');
    expect(timelineItems.length).toBeGreaterThan(0);
  });

  it("displays position as strong text", () => {
    const { container } = renderWithLanguage(<ExperienceTimeline />);
    const strongElements = container.querySelectorAll("strong");
    expect(strongElements.length).toBeGreaterThan(0);
  });

  it("renders timeline dots", () => {
    const { container } = renderWithLanguage(<ExperienceTimeline />);
    const dots = container.querySelectorAll('[class*="TimelineDot"]');
    expect(dots.length).toBeGreaterThan(0);
  });

  it("renders timeline separators", () => {
    const { container } = renderWithLanguage(<ExperienceTimeline />);
    expect(container.querySelector('[class*="TimelineSeparator"]')).toBeInTheDocument();
  });
});
