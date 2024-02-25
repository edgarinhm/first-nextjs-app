/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Reliability from "./page";
import { localeMessages } from "@/constants/constants";

describe("Reliability", () => {
  it("should display reliability title 'super high reliability hosting.'", () => {
    render(<Reliability />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      localeMessages.ReliabilityTitle
    );
  });
});
