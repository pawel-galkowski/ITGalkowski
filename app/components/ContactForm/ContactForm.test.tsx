import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "./ContactForm";

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
    t: (key: string) => key,
  }),
}));

globalThis.fetch = jest.fn(() =>
  Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true }) })
) as jest.Mock;

describe("ContactForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all fields and submit button", () => {
    render(<ContactForm />);
    expect(screen.getByText("contact.nameLabel")).toBeInTheDocument();
    expect(screen.getByText("contact.emailLabel")).toBeInTheDocument();
    expect(screen.getByText("contact.messageLabel")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  it("shows validation errors for empty fields", async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /send/i }));
    expect(await screen.findByText("Name is required")).toBeInTheDocument();
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    expect(await screen.findByText("Message is required")).toBeInTheDocument();
  });

  it("shows error for invalid email", async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText("contact.nameLabel"), { target: { value: "Test" } });
    fireEvent.change(screen.getByLabelText("contact.emailLabel"), { target: { value: "bademail" } });
    fireEvent.change(screen.getByLabelText("contact.messageLabel"), { target: { value: "Hello" } });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));
    expect(await screen.findByText("Invalid email address")).toBeInTheDocument();
  });

  it("submits form and shows success", async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText("contact.nameLabel"), { target: { value: "Test" } });
    fireEvent.change(screen.getByLabelText("contact.emailLabel"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText("contact.messageLabel"), { target: { value: "Hello" } });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/contact",
        expect.objectContaining({ method: "POST" })
      );
    });
    // Success message (uses t("contact.sendButton"))
    expect(screen.getByText("contact.sendButton")).toBeInTheDocument();
  });

  it("shows error if API fails", async () => {
    (globalThis.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ ok: false, json: () => Promise.resolve({ error: "Server error" }) })
    );
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText("contact.nameLabel"), { target: { value: "Test" } });
    fireEvent.change(screen.getByLabelText("contact.emailLabel"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText("contact.messageLabel"), { target: { value: "Hello" } });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));
    expect(await screen.findByText("Server error")).toBeInTheDocument();
  });
});
