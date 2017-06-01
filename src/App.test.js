import React from "react";
import ReactDOM from "react-dom";
import App, { getCard, getColorByStatus, Card, Sequence, Legend } from "./App";

it("renders an App without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders a Card component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card />, div);
});

it("renders a Sequence component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Sequence />, div);
});

it("renders a Legend component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Legend />, div);
});

it("initializes a card with a default status of impeded", () => {
  const card = getCard();
  expect(card.status).toEqual("impeded");
});

it("initializes a card with a given status", () => {
  const card = getCard("ready");
  expect(card.status).toEqual("ready");
});

it("has a red background by default when it's impeded", () => {
  const status = getCard("impeded").status;
  const color = getColorByStatus(status);
  expect(color).toEqual("red");
});

it("has a yellow background by default when it's ready", () => {
  const status = getCard("ready").status;
  const color = getColorByStatus(status);
  expect(color).toEqual("yellow");
});

it("has a cornflowerblue background by default when it's in progress", () => {
  const status = getCard("in progress").status;
  const color = getColorByStatus(status);
  expect(color).toEqual("cornflowerblue");
});

it("has a green background by default when it's in progress", () => {
  const status = getCard("done").status;
  const color = getColorByStatus(status);
  expect(color).toEqual("green");
});
