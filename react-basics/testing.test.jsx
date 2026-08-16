import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Alert } from "./alert";

test("Alert Message", () => {
  render(<Alert message={"Something went wrong"} />);
  const alertMessage = screen.getByRole("alert");
  expect(alertMessage).toBeInTheDocument();
});
