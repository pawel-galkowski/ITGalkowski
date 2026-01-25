import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm, { contactFormTestIds } from "@/components/contactForm/ContactForm";

// Mock ReCAPTCHA
jest.mock("react-google-recaptcha", () =>
  React.forwardRef((props: any, ref) => {
    React.useImperativeHandle(ref, () => ({
      executeAsync: () => Promise.resolve("mocked-token"),
      reset: jest.fn(),
    }));
    return <div data-testid="recaptcha-mock" />;
  })
);

// Mock useLanguage and useTranslations
jest.mock("@/context/LanguageContext", () => ({
  useLanguage: () => ({ language: "en" }),
}));
jest.mock("@/i18n", () => ({
  useTranslations: () => ({
    t: (key: string) => {
      // Return actual error/success strings for test matching
      if (key === "contact.nameLabel") return "Name";
      if (key === "contact.emailLabel") return "Email";
      if (key === "contact.messageLabel") return "Message";
      if (key === "contact.sendButton") return "Send";
      return key;
    },
  }),
}));


// Helper to set fetch mock

const defaultJson = { success: true };
const setFetchMock = (ok: boolean = true, json: any = defaultJson): void => {
  (globalThis.fetch as unknown as jest.Mock) = jest.fn((): Promise<{ ok: boolean; json: () => Promise<any> }> =>
    Promise.resolve({ ok, json: () => Promise.resolve(json) })
  );
};


describe("ContactForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    setFetchMock();
  });

  it("renders all fields and submit button", () => {
    render(<ContactForm />);
    expect(screen.getByTestId(contactFormTestIds.name)).toBeInTheDocument();
    expect(screen.getByTestId(contactFormTestIds.email)).toBeInTheDocument();
    expect(screen.getByTestId(contactFormTestIds.message)).toBeInTheDocument();
    expect(screen.getByTestId(contactFormTestIds.submit)).toBeInTheDocument();
  });

  it("shows error for invalid email", async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByTestId(contactFormTestIds.name).querySelector('input') as HTMLInputElement, { target: { value: "Test" } });
    fireEvent.change(screen.getByTestId(contactFormTestIds.email).querySelector('input') as HTMLInputElement, { target: { value: "bademail" } });
    fireEvent.change(screen.getByTestId(contactFormTestIds.message).querySelector('textarea') as HTMLTextAreaElement, { target: { value: "Hello" } });
    fireEvent.click(screen.getByTestId(contactFormTestIds.submit));
    expect(await screen.findByText("Invalid email address")).toBeInTheDocument();
  });

  it("submits form and shows success", async () => {
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY = "test-key";
    setFetchMock(true, { success: true });
    render(<ContactForm />);
    fireEvent.change(screen.getByTestId(contactFormTestIds.name).querySelector('input') as HTMLInputElement, { target: { value: "Test" } });
    fireEvent.change(screen.getByTestId(contactFormTestIds.email).querySelector('input') as HTMLInputElement, { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByTestId(contactFormTestIds.message).querySelector('textarea') as HTMLTextAreaElement, { target: { value: "Hello" } });
    fireEvent.click(screen.getByTestId(contactFormTestIds.submit));
    await waitFor(() => {
      expect(globalThis.fetch).toHaveBeenCalledWith(
        "/api/contact",
        expect.objectContaining({ method: "POST" })
      );
    });
    // Wait for success message in Fade (Typography with color="success.main")
    const allSend = await screen.findAllByText("Send", undefined, { timeout: 2000 });
    // The success message is a <p> (Typography), the button is a <button>
    const successMsg = allSend.find(el => el.tagName.toLowerCase() === "p");
    expect(successMsg).toBeInTheDocument();
  });

  it("shows error if API fails", async () => {
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY = "test-key";
    setFetchMock(false, { error: "Server error" });
    render(<ContactForm />);
    fireEvent.change(screen.getByTestId(contactFormTestIds.name).querySelector('input') as HTMLInputElement, { target: { value: "Test" } });
    fireEvent.change(screen.getByTestId(contactFormTestIds.email).querySelector('input') as HTMLInputElement, { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByTestId(contactFormTestIds.message).querySelector('textarea') as HTMLTextAreaElement, { target: { value: "Hello" } });
    fireEvent.click(screen.getByTestId(contactFormTestIds.submit));
    // Wait for error message in Fade (Typography with color="error.main")
    const errorMsg = await screen.findByText("Server error", undefined, { timeout: 2000 });
    expect(errorMsg).toBeInTheDocument();
  });
});
