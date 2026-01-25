import { render, screen, fireEvent } from "@testing-library/react";
import Faqs, { baseTestIds, generateFaqTestId } from "./Faqs";

const faqsList = [
  { question: "How does the FAQ work?", answer: "The FAQ works using an accordion." },
  { question: "Is this a test?", answer: "Yes, this is a test." },
];

describe("Faqs component", () => {
  it("renders all FAQ accordions and questions", () => {
    render(<Faqs faqsList={faqsList} />);
    expect(screen.getByTestId(baseTestIds.root)).toBeInTheDocument();
    expect(screen.getByTestId(generateFaqTestId(baseTestIds.accordion, 0))).toBeInTheDocument();
    expect(screen.getByTestId(generateFaqTestId(baseTestIds.accordion, 1))).toBeInTheDocument();
    expect(screen.getByText(faqsList[0].question)).toBeInTheDocument();
    expect(screen.getByText(faqsList[1].question)).toBeInTheDocument();
  });

  it("renders ExpandMoreIcon for each accordion", () => {
    render(<Faqs faqsList={faqsList} />);
    const icons = screen.getAllByTestId("ExpandMoreIcon");
    expect(icons.length).toBe(faqsList.length);
  });

  it("expands and collapses FAQ details", () => {
    render(<Faqs faqsList={faqsList} />);
    expect(screen.getByTestId(generateFaqTestId(baseTestIds.details, 0))).toBeVisible();
    expect(screen.getByTestId(generateFaqTestId(baseTestIds.details, 1))).not.toBeVisible();

    // Click the second accordion
    fireEvent.click(screen.getByTestId(generateFaqTestId(baseTestIds.summary, 1)));
    expect(screen.getByTestId(generateFaqTestId(baseTestIds.details, 1))).toBeVisible();
    expect(screen.getByTestId(generateFaqTestId(baseTestIds.details, 0))).not.toBeVisible();
  });

  it("shows the correct answer text when expanded", () => {
    render(<Faqs faqsList={faqsList} />);
    expect(screen.getByText(faqsList[0].answer)).toBeVisible();
    fireEvent.click(screen.getByTestId(generateFaqTestId(baseTestIds.summary, 1)));
    expect(screen.getByText(faqsList[1].answer)).toBeVisible();
  });
});
