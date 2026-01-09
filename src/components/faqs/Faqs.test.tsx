import React from "react";
import { render, screen } from "@testing-library/react";
import Faqs from "./Faqs";

describe("Faqs Component", () => {
  it("renders accordion component", () => {
    render(<Faqs />);
    // Check for at least one accordion visible
    const accordions = screen.getAllByRole("button");
    expect(accordions.length).toBeGreaterThan(0);
  });

  it("displays first FAQ question", () => {
    render(<Faqs />);
    expect(
      screen.getByText(/What services do you offer as a full-stack JavaScript engineer/)
    ).toBeInTheDocument();
  });

  it("displays all FAQ questions", () => {
    render(<Faqs />);
    expect(
      screen.getByText(/What services do you offer as a full-stack JavaScript engineer/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Which JavaScript frameworks do you specialize in/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Can you work remotely from Katowice/)).toBeInTheDocument();
    expect(screen.getByText(/Do you handle the entire development process/)).toBeInTheDocument();
    expect(screen.getByText(/What is your approach to project management/)).toBeInTheDocument();
  });

  it("contains JavaScript-related content", () => {
    render(<Faqs />);
    const jsElements = screen.queryAllByText(/JavaScript/);
    expect(jsElements.length).toBeGreaterThan(0);
  });

  it("contains Katowice reference", () => {
    render(<Faqs />);
    const katowiceElements = screen.queryAllByText(/Katowice/);
    expect(katowiceElements.length).toBeGreaterThan(0);
  });

  it("contains development process mention", () => {
    render(<Faqs />);
    expect(screen.getByText(/development lifecycle/)).toBeInTheDocument();
  });

  it("contains agile methodologies mention", () => {
    render(<Faqs />);
    expect(screen.getByText(/agile methodologies/)).toBeInTheDocument();
  });
});
