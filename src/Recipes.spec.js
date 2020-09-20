import React from "react";
import { render, screen } from "@testing-library/react";
import { Recipes } from "./Recipes";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";

test("to render the heading, input field and button", () => {
  render(<Recipes />);

  //test 1:
  expect(screen.getByRole("heading")).toHaveTextContent("Recipe Finder");
  // test 2:
  expect(
    screen.getAllByPlaceholderText("Enter an ingredient to find recipes...")
      .toBeIntheDocument
  );
  // test 3:
  expect(screen.getByRole("button")).toHaveTextContent("Find");
});
