import React from "react";
import { render, screen } from "@testing-library/react";
import { Recipes } from "./Recipes";
import { rest } from "msw";
import { setupServer } from "msw/node";

const allRecipes = [
  { id: 1, title: "Burger" },
  { id: 2, title: "French Toast" },
  { id: 3, title: "Salmon" },
];

const server = setupServer(
  rest.get("/api/recipes", (req, res, ctx) => {
    return res(ctx.json({ recipes: allRecipes }));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test("fetches and displays all recipes", async () => {
  render(<Recipes />);

  const listItems = await screen.findAllByRole("listitem");
  expect(listItems).toHaveLength(3);
  expect(listItems[0]).toHaveTextContent("Burger");
  expect(listItems[1]).toHaveTextContent("French Toast");
  expect(listItems[2]).toHaveTextContent("Salmon");
});

// test("to render the heading, input field and button", () => {
//   render(<Recipes />);

//   //test 1:
//   expect(screen.getByRole("heading")).toHaveTextContent("Recipe Finder");
//   // test 2:
//   expect(
//     screen.getAllByPlaceholderText("Enter an ingredient to find recipes...")
//       .toBeIntheDocument
//   );
//   // test 3:
//   expect(screen.getByRole("button")).toHaveTextContent("Find");
// });
