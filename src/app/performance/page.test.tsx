/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";
import { localeMessages } from "@/constants/constants";

describe("Home", () => {
  it("should display home title we serve 'high performance applications.'", () => {
    render(<Home />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      localeMessages.PerformanceTitle
    );
  });
});
