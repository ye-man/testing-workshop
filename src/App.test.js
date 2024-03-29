import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App Component", () => {
  it("Renders without crashing", () => {
    ReactDOM.render(<App />, document.createElement("div"));

    ReactDOM.unmountComponentAtNode(document.createElement("div"));
  });

  it("Match Snapshot", () => {
    const { firstChild } = render(<App />);

    expect(firstChild).toMatchSnapshot();
  });

  it("Should go to the Toggle Component", () => {
    const { getByText, getByTestId } = render(<App />);

    const toggleLink = getByText("Toggle");

    fireEvent.click(toggleLink);

    const toggleContainer = getByTestId("toggleContainer");

    expect(toggleContainer).toBeInTheDocument();
  });

  it("Should go to the Counter Component", () => {
    const { getByText, getByTestId } = render(<App />);

    const counterLink = getByText("Counter");

    fireEvent.click(counterLink);

    const counterContainer = getByTestId("counterContainer");

    expect(counterContainer).toBeInTheDocument();
  });

  it("Should go to the ChangeName Component", () => {
    const { getByText, getByTestId } = render(<App />);

    const changeNameLink = getByText("Change Name");

    fireEvent.click(changeNameLink);

    const changeNameContainer = getByTestId("changeNameContainer");

    expect(changeNameContainer).toBeInTheDocument();
  });
});
