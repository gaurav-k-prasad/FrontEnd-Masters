import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = ({ name, ingredients }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("ul", {}, [
      ingredients.map((item) => {
        return React.createElement("li", {}, item);
      }),
    ]),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement(
      "div",
      {},
      React.createElement(Pizza, {
        name: "Pizza1",
        ingredients: ["cheese", "tomato", "onion"],
      }),
      React.createElement(Pizza, {
        name: "Pizza2",
        ingredients: ["cheese", "tomato", "onion"],
      }),
      React.createElement(Pizza, {
        name: "Pizza3",
        ingredients: ["cheese", "tomato", "onion"],
      }),
    ),
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
