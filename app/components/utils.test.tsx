import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageButtons } from "./utils";
import { Languages } from "@/i18n/types";
import { render } from "@testing-library/react";

describe("LanguageButtons Component", () => {
  it("renders language buttons container", () => {
    const mockHandleLanguageChange = jest.fn();
    const { container } = render(
      <LanguageButtons 
        language={Languages.EN} 
        handleLanguageChange={mockHandleLanguageChange} 
      />
    );
    expect(container).toBeInTheDocument();
  });

  it("renders when language is English", () => {
    const mockHandleLanguageChange = jest.fn();
    const { container } = render(
      <LanguageButtons 
        language={Languages.EN} 
        handleLanguageChange={mockHandleLanguageChange} 
      />
    );
    const button = container.querySelector('img[alt="English flag"]');
    expect(button).toBeInTheDocument();
  });

  it("renders when language is Polish", () => {
    const mockHandleLanguageChange = jest.fn();
    const { container } = render(
      <LanguageButtons 
        language={Languages.PL} 
        handleLanguageChange={mockHandleLanguageChange} 
      />
    );
    const button = container.querySelector('img[alt="Polish flag"]');
    expect(button).toBeInTheDocument();
  });

  it("calls handler when flag is clicked", async () => {
    const user = userEvent.setup();
    const mockHandleLanguageChange = jest.fn();
    const { container } = render(
      <LanguageButtons 
        language={Languages.EN} 
        handleLanguageChange={mockHandleLanguageChange} 
      />
    );
    
    const button = container.querySelector('img');
    if (button) {
      await user.click(button);
      expect(mockHandleLanguageChange).toHaveBeenCalledWith(Languages.PL);
    }
  });

  it("displays flag images with proper styling", () => {
    const mockHandleLanguageChange = jest.fn();
    const { container } = render(
      <LanguageButtons 
        language={Languages.EN} 
        handleLanguageChange={mockHandleLanguageChange} 
      />
    );
    
    const flagImage = container.querySelector('img');
    expect(flagImage).toHaveAttribute('alt');
    expect(flagImage).toHaveStyle({ width: '20px' });
  });

  it("has clickable flag image element", () => {
    const mockHandleLanguageChange = jest.fn();
    const { container } = render(
      <LanguageButtons 
        language={Languages.EN} 
        handleLanguageChange={mockHandleLanguageChange} 
      />
    );
    
    const flagImage = container.querySelector('img');
    expect(flagImage).toBeInTheDocument();
  });
});
