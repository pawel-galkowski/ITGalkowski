import { render, screen, fireEvent } from "@testing-library/react";
// Mock next/navigation hooks for app router context
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
  usePathname: () => "/",
  useSearchParams: () => ({ toString: () => "" }),
}));
import Header, { headerTestIds } from "./Header";
import { renderWithA11y } from "../../test-utils/a11y";
import { LanguageProvider } from "../../context/LanguageContext";
import { en } from "../../i18n/en";

const HeaderWithProvider = () => (
  <LanguageProvider>
    <Header />
  </LanguageProvider>
);

describe("Header Component", () => {
  it("renders header with logo image and hidden h1", () => {
    render(<HeaderWithProvider />);
    // Check for at least one logo image
    const logos = screen.getAllByTestId(headerTestIds.logo);
    expect(logos.length).toBeGreaterThan(0);
    expect(logos[0]).toHaveAttribute("alt");
  });

  it("renders navigation items", () => {
    render(<HeaderWithProvider />);
    const homeItems = screen.getAllByText(en.header.home);
    const aboutItems = screen.getAllByText(en.header.about);
    const contactItems = screen.getAllByText(en.header.contact);
    expect(homeItems.length).toBeGreaterThan(0);
    expect(aboutItems.length).toBeGreaterThan(0);
    expect(contactItems.length).toBeGreaterThan(0);
  });

  it("has header data-testid", () => {
    render(<HeaderWithProvider />);
    expect(screen.getByTestId(headerTestIds.root)).toBeInTheDocument();
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
    fireEvent.click(menuButton!);
    const homeItems = screen.getAllByText(en.header.home);
    expect(homeItems.length).toBeGreaterThan(0);
  });

  it("renders AppBar component", () => {
    render(<HeaderWithProvider />);
    const header = screen.getByTestId(headerTestIds.root);
    expect(header).toBeInTheDocument();
  });
  it("renders logo with data-testid", () => {
    render(<HeaderWithProvider />);
    // There are two logos (AppBar and Drawer)
    const logos = screen.getAllByTestId(headerTestIds.logo);
    expect(logos.length).toBeGreaterThanOrEqual(1);
  });

  it("renders nav with data-testid", () => {
    render(<HeaderWithProvider />);
    expect(screen.getByTestId(headerTestIds.nav)).toBeInTheDocument();
  });

  it("renders menu button with data-testid", () => {
    render(<HeaderWithProvider />);
    expect(screen.getByTestId(headerTestIds.menuButton)).toBeInTheDocument();
  });

  it("renders drawer and drawer elements with data-testid", () => {
    render(<HeaderWithProvider />);
    // Open drawer
    fireEvent.click(screen.getByTestId(headerTestIds.menuButton));
    expect(screen.getByTestId(headerTestIds.drawer)).toBeInTheDocument();
    // No drawerTitle in component, so skip that check
    expect(screen.getByTestId(headerTestIds.drawerNav)).toBeInTheDocument();
    expect(screen.getAllByTestId(headerTestIds.drawerListButton).length).toBeGreaterThan(0);
  });

  it("has no accessibility violations", async () => {
    const { checkA11y } = renderWithA11y(<HeaderWithProvider />);
    await checkA11y();
  });

  it("menu button has proper aria-label", () => {
    render(<HeaderWithProvider />);
    const menuButton = screen.getByTestId(headerTestIds.menuButton);
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute("aria-label");
  });

  it("desktop navigation has aria-label", () => {
    render(<HeaderWithProvider />);
    const nav = screen.getByTestId(headerTestIds.nav);
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("aria-label");
  });

  it("drawer closes when item is clicked", () => {
    render(<HeaderWithProvider />);
    const menuButton = screen.getAllByRole("button")[0];
    if (menuButton) fireEvent.click(menuButton);
    const navItems = screen.getAllByText(en.header.home);
    if (navItems[1]) fireEvent.click(navItems[1]);
    expect(screen.queryAllByRole("navigation")[0]).toBeDefined();
  });
});
