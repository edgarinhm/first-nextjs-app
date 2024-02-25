/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Scale from "./page";
import { localeMessages } from "@/constants/constants";

describe("Scale", () => {
  it("should display scale title 'scale your app to infinity.'", () => {
    render(<Scale />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      localeMessages.ScaleTitle
    );
  });
});
