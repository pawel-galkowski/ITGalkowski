import { screen } from "@testing-library/react";
import ExperienceTimeline, { experienceTimelineTestIds } from "./ExperienceTimeline";
import { renderWithLanguage } from "@/test-utils/a11y";

// Mock the data files
jest.mock("./data/en.json", () => [
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

jest.mock("./data/pl.json", () => [
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
    renderWithLanguage(<ExperienceTimeline />);
    expect(screen.getByTestId(experienceTimelineTestIds.root)).toBeInTheDocument();
  });

  it("displays experience entries", () => {
    renderWithLanguage(<ExperienceTimeline />);
    const positions = screen.getAllByTestId(experienceTimelineTestIds.position);
    expect(positions[0]).toHaveTextContent("Junior Developer");
    expect(positions[1]).toHaveTextContent("Mid-level Developer");
  });

  it("displays company names", () => {
    renderWithLanguage(<ExperienceTimeline />);
    const companies = screen.getAllByTestId(experienceTimelineTestIds.company);
    expect(companies[0]).toHaveTextContent("Tech Company");
    expect(companies[1]).toHaveTextContent("Growth Startup");
  });

  it("displays dates", () => {
    renderWithLanguage(<ExperienceTimeline />);
    const dates = screen.getAllByTestId(experienceTimelineTestIds.date);
    expect(dates[0]).toHaveTextContent("2020 - 2021");
    expect(dates[1]).toHaveTextContent("2021 - 2023");
  });

  it("renders timeline items", () => {
    renderWithLanguage(<ExperienceTimeline />);
    const items = screen.getAllByTestId(experienceTimelineTestIds.item);
    expect(items.length).toBeGreaterThan(0);
  });

  it("displays position as strong text", () => {
    renderWithLanguage(<ExperienceTimeline />);
    const positions = screen.getAllByTestId(experienceTimelineTestIds.position);
    positions.forEach((pos) => {
      expect(pos.querySelector("strong")).toBeInTheDocument();
    });
  });

  it("renders timeline dots", () => {
    renderWithLanguage(<ExperienceTimeline />);
    const dots = screen.getAllByTestId(experienceTimelineTestIds.dot);
    expect(dots.length).toBeGreaterThan(0);
  });

  it("renders timeline separators", () => {
    renderWithLanguage(<ExperienceTimeline />);
    const separators = screen.getAllByTestId(experienceTimelineTestIds.separator);
    expect(separators.length).toBeGreaterThan(0);
  });
});
