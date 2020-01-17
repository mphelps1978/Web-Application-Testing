import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

it("renders properly without crashing", () => {
  const wrapper = rtl.render(<App />);
});

it("Shows the correct information", () => {
  const wrapper = rtl.render(<App />);
  const text = wrapper.queryByText(/scoreboard/i);
  expect(text).toBeVisible();
});

// it("increments strikes properly" () => {
// Can't figure this one out
// })
