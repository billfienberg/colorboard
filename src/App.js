import React, { Component } from "react";
import "./App.css";

export const Card = ({ ...props }) => {
  const status = props.status || "impeded";
  const backgroundColor = getColorByStatus(status);
  return (
    <div className="Card" style={{ backgroundColor }}>
      <div>{props.title}</div>
    </div>
  );
};

export const Sequence = ({ ...props }) => {
  const tiitle = props.title;
  const cards = props.cards || [];
  const cardsList = cards.map((c, i) => (
    <Card title={c.title} status={c.status} key={i} />
  ));
  return (
    <div className="Sequence">
      <div className="Sequence-title">{tiitle}</div>
      <div className="Sequence-cards">{cardsList}</div>
    </div>
  );
};

export const Legend = () => {
  return (
    <div className="Legend">
      <div className="Legend-item">
        <div className="Legend-color" style={{ backgroundColor: "red" }} />
        <div className="Legend-label">Impeded</div>
      </div>
      <div className="Legend-item">
        <div className="Legend-color" style={{ backgroundColor: "yellow" }} />
        <div className="Legend-label">Ready</div>
      </div>
      <div className="Legend-item">
        <div
          className="Legend-color"
          style={{ backgroundColor: "cornflowerblue" }}
        />
        <div className="Legend-label">In Progress</div>
      </div>
      <div className="Legend-item">
        <div className="Legend-color" style={{ backgroundColor: "green" }} />
        <div className="Legend-label">Done</div>
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    const sequences = getRandomColorBoard();
    const sequencesList = sequences.map((c, i) => {
      const title = c.title;
      const cards = c.cards;
      return <Sequence title={title} cards={cards} key={i} />;
    });
    return <div className="App"><Legend />{sequencesList}</div>;
  }
}

export function getCard(status = "impeded") {
  const output = {
    status,
  };
  return output;
}

export function getColorByStatus(status) {
  switch (status) {
    case "impeded":
      return "red";
    case "ready":
      return "yellow";
    case "in progress":
      return "cornflowerblue";
    case "done":
      return "green";
    default:
      console.log("WHAT'D YOU DO?!");
      return "pink";
  }
}

export default App;

function getRandomElementFromArray(array) {
  const output = array[Math.floor(Math.random() * array.length)];
  return output;
}

function getRandomBathroomCleaningCard() {
  return getRandomElementFromArray(bathroomCleaningCards);
}

function getRandomGrocerySequence() {
  return getRandomElementFromArray(grocerySequences);
}

function getRandomLaundrySequence() {
  return getRandomElementFromArray(laundrySequences);
}

function getRandomColorBoard() {
  const sequences = [];
  sequences.push(getRandomLaundrySequence());
  sequences.push(getRandomGrocerySequence());
  sequences.push(getRandomBathroomCleaningCard());
  return sequences;
}

const bathroomCleaningCards = [
  {
    title: "Clean Bathroon",
    cards: [{ title: "Clean Bathroom", status: "ready" }],
  },
  {
    title: "Clean Bathroon",
    cards: [{ title: "Clean Bathroom", status: "in progress" }],
  },
  {
    title: "Clean Bathroon",
    cards: [{ title: "Clean Bathroom", status: "done" }],
  },
];

const grocerySequences = [
  {
    title: "Groceries",
    cards: [
      { title: "Purchase", status: "ready" },
      { title: "Put Away", status: "impeded" },
    ],
  },
  {
    title: "Groceries",
    cards: [
      { title: "Purchase", status: "in progress" },
      { title: "Put Away", status: "impeded" },
    ],
  },
  {
    title: "Groceries",
    cards: [
      { title: "Purchase", status: "done" },
      { title: "Put Away", status: "ready" },
    ],
  },
  {
    title: "Groceries",
    cards: [
      { title: "Purchase", status: "done" },
      { title: "Put Away", status: "in progress" },
    ],
  },
  {
    title: "Groceries",
    cards: [
      { title: "Purchase", status: "done" },
      { title: "Put Away", status: "done" },
    ],
  },
];

const laundrySequences = [
  {
    title: "Laundry",
    cards: [
      { title: "Wash", status: "ready" },
      { title: "Dry", status: "impeded" },
      { title: "Fold", status: "impeded" },
    ],
  },
  {
    title: "Laundry",
    cards: [
      { title: "Wash", status: "in progress" },
      { title: "Dry", status: "impeded" },
      { title: "Fold", status: "impeded" },
    ],
  },
  {
    title: "Laundry",
    cards: [
      { title: "Wash", status: "done" },
      { title: "Dry", status: "ready" },
      { title: "Fold", status: "impeded" },
    ],
  },
  {
    title: "Laundry",
    cards: [
      { title: "Wash", status: "done" },
      { title: "Dry", status: "in progress" },
      { title: "Fold", status: "impeded" },
    ],
  },
  {
    title: "Laundry",
    cards: [
      { title: "Wash", status: "done" },
      { title: "Dry", status: "done" },
      { title: "Fold", status: "ready" },
    ],
  },
  {
    title: "Laundry",
    cards: [
      { title: "Wash", status: "done" },
      { title: "Dry", status: "done" },
      { title: "Fold", status: "in progress" },
    ],
  },
  {
    title: "Laundry",
    cards: [
      { title: "Wash", status: "done" },
      { title: "Dry", status: "done" },
      { title: "Fold", status: "done" },
    ],
  },
];
