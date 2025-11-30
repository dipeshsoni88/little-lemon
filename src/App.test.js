import { render, screen } from "@testing-library/react";
// user-event is available if needed; avoid using `setup()` to stay compatible
// with older installed versions in CI/local envs.
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  const renderApp = () =>
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

  test("renders navigation with main navigation role", () => {
    renderApp();
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  test("renders main content area", () => {
    renderApp();
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  test("renders footer with contentinfo role", () => {
    renderApp();
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  test("footer contains copyright text", () => {
    renderApp();
    const copyrightText = screen.getByText(/2025 Little Lemon/i);
    expect(copyrightText).toBeInTheDocument();
  });

  test("navigation contains home link", () => {
    renderApp();
    const homeLink = screen.getByRole("link", { name: /^home$/i });
    expect(homeLink).toBeInTheDocument();
  });

  test("navigation contains booking link", () => {
    renderApp();
    const bookingLink = screen.getByRole("link", { name: /booking/i });
    expect(bookingLink).toBeInTheDocument();
  });

  test("navigation contains chicago link", () => {
    renderApp();
    const chicagoLink = screen.getByRole("link", { name: /chicago/i });
    expect(chicagoLink).toBeInTheDocument();
  });

  test("navigation contains specials link", () => {
    renderApp();
    const specialsLink = screen.getByRole("link", { name: /specials/i });
    expect(specialsLink).toBeInTheDocument();
  });

  test("navigation contains testimonials link", () => {
    renderApp();
    const testimonialsLink = screen.getByRole("link", { name: /testimonials/i });
    expect(testimonialsLink).toBeInTheDocument();
  });

  test("logo link navigates to home", () => {
    renderApp();
    const logoLink = screen.getByRole("link", { name: /little lemon/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
  });

  test("home link has correct href", () => {
    renderApp();
    const homeLink = screen.getByRole("link", { name: /^home$/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  test("booking link has correct href", () => {
    renderApp();
    const bookingLink = screen.getByRole("link", { name: /booking/i });
    expect(bookingLink).toHaveAttribute("href", "/booking");
  });
});