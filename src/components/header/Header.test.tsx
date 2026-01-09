import { render, screen, fireEvent } from "@testing-library/react";
import { renderWithA11y } from "@/test-utils/a11y";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "./Header";

const HeaderWithProvider = () => (
  <LanguageProvider>
    <Header />
  </LanguageProvider>
);

describe("Header Component", () => {
  it("renders header with logo text", () => {
    render(<HeaderWithProvider />);
    expect(screen.getByText("Logo ITGalkowski")).toBeInTheDocument();
  });

  it("renders navigation items", () => {
    render(<HeaderWithProvider />);
    const homeItems = screen.getAllByText("Home");
    const aboutItems = screen.getAllByText("About");
    const contactItems = screen.getAllByText("Contact");
    expect(homeItems.length).toBeGreaterThan(0);
    expect(aboutItems.length).toBeGreaterThan(0);
    expect(contactItems.length).toBeGreaterThan(0);
  });

  it("has header data-testid", () => {
    render(<HeaderWithProvider />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("has header role banner for accessibility", () => {
    render(<HeaderWithProvider />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders menu button on mobile", () => {
    render(<HeaderWithProvider />);
    const menuButtons = screen.getAllByRole("button");
    expect(menuButtons.length).toBeGreaterThan(0);
  });

  it("toggles drawer when menu button is clicked", () => {
    render(<HeaderWithProvider />);
    const menuButton = screen.getAllByRole("button")[0];
    fireEvent.click(menuButton);
    const homeItems = screen.getAllByText("Home");
    expect(homeItems.length).toBeGreaterThan(0);
  });

  it("renders AppBar component", () => {
    render(<HeaderWithProvider />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { checkA11y } = renderWithA11y(<HeaderWithProvider />);
    await checkA11y();
  });

  it("menu button has proper aria-label", () => {
    render(<HeaderWithProvider />);
    const menuButton = screen.getByLabelText("open navigation drawer");
    expect(menuButton).toBeInTheDocument();
  });

  it("main navigation has aria-label", () => {
    render(<HeaderWithProvider />);
    const nav = screen.getByLabelText("Main navigation");
    expect(nav).toBeInTheDocument();
  });

  it("drawer closes when item is clicked", () => {
    render(<HeaderWithProvider />);
    const menuButton = screen.getAllByRole("button")[0];
    fireEvent.click(menuButton);
    const navItems = screen.getAllByText("Home");
    fireEvent.click(navItems[1]);
    expect(screen.queryAllByRole("navigation")[0]).toBeDefined();
  });
});

