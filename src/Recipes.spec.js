import React from "react";
import { render, screen } from "@testing-library/react";
import { Recipes } from './Recipes'

test("to render the heading", () => {
  render(<Recipes />);

  expect(screen.getByRole('heading')).toHaveTextContent('Recipe Finder');
});
