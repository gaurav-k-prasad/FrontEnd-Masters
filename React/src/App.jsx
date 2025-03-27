import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

/*
import Pizza from "./Pizza";

<div>
  <h1>Padre Gino's Pizza</h1>
  <Pizza
    name={"Pizza1"}
    description={"A delicious cheese pizza"}
    image={"/public/pizzas/pepperoni.webp"}
  />
  <Pizza
    name={"Pizza2"}
    description={"A pineapple pizza"}
    image={"/public/pizzas/hawaiian.webp"}
  />
  <Pizza
    name={"Pizza3"}
    description={"A tasty pepperoni pizza"}
    image={"/public/pizzas/big_meat.webp"}
  />
</div>
*/
