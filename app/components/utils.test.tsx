import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageButtons, languageButtonsTestIds } from "./utils";
import { Languages } from "@/i18n/types";

describe("LanguageButtons Component", () => {
  it("renders language buttons container with test ID", () => {
    const mockHandleLanguageChange = jest.fn();
    render(
      <LanguageButtons 
        language={Languages.EN} 
        handleLanguageChange={mockHandleLanguageChange} 
      />
    );
    expect(screen.getByTestId(languageButtonsTestIds.container)).toBeInTheDocument();
  });

  it("renders English flag with test ID when language is English", () => {
    const mockHandleLanguageChange = jest.fn();
    render(
      <LanguageButtons 
        language={Languages.EN} 
        handleLanguageChange={mockHandleLanguageChange} 
      />
    );
    expect(screen.getByTestId(languageButtonsTestIds.enFlag)).toBeInTheDocument();
    expect(screen.getByAltText("English flag")).toBeInTheDocument();
  });

  it("renders Polish flag with test ID when language is Polish", () => {
    const mockHandleLanguageChange = jest.fn();
    render(
      <LanguageButtons 
        language={Languages.PL} 
        handleLanguageChange={mockHandleLanguageChange} 
      />
    );
    expect(screen.getByTestId(languageButtonsTestIds.plFlag)).toBeInTheDocument();
    expect(screen.getByAltText("Polish flag")).toBeInTheDocument();
  });

  it("calls handler when English flag is clicked", async () => {
    const user = userEvent.setup();
    const mockHandleLanguageChange = jest.fn();
    render(
      <LanguageButtons 
        language={Languages.EN} 
        handleLanguageChange={mockHandleLanguageChange} 
      />
    );
    
    const button = screen.getByTestId(languageButtonsTestIds.enFlag);
    await user.click(button);
    expect(mockHandleLanguageChange).toHaveBeenCalledWith(Languages.PL);
  });

  it("calls handler when Polish flag is clicked", async () => {
    const user = userEvent.setup();
    const mockHandleLanguageChange = jest.fn();
    render(
      <LanguageButtons 
        language={Languages.PL} 
        handleLanguageChange={mockHandleLanguageChange} 
      />
    );
    
    const button = screen.getByTestId(languageButtonsTestIds.plFlag);
    await user.click(button);
    expect(mockHandleLanguageChange).toHaveBeenCalledWith(Languages.EN);
  });

  it("displays English flag with proper styling", () => {
    const mockHandleLanguageChange = jest.fn();
    render(
      <LanguageButtons 
        language={Languages.EN} 
        handleLanguageChange={mockHandleLanguageChange} 
      />
    );
    
    const flagImage = screen.getByTestId(languageButtonsTestIds.enFlag);
    expect(flagImage).toHaveAttribute("alt", "English flag");
    expect(flagImage).toHaveAttribute("src", "/img/en.png");
  });

  it("displays Polish flag with proper styling", () => {
    const mockHandleLanguageChange = jest.fn();
    render(
      <LanguageButtons 
        language={Languages.PL} 
        handleLanguageChange={mockHandleLanguageChange} 
      />
    );
    
    const flagImage = screen.getByTestId(languageButtonsTestIds.plFlag);
    expect(flagImage).toHaveAttribute("alt", "Polish flag");
    expect(flagImage).toHaveAttribute("src", "/img/pl.png");
  });
});
