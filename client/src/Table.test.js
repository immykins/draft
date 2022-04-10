import { render, screen } from "@testing-library/react";
import Table from "./Table";

test("renders cards from props", () => {
  const cards = [
    {
      name: "Teachings of the Kirin",
      front: "en_u5HnLDTo0g",
      back: "en_ekujQ2FTdj",
    },
  ];

  render(<Table cards={cards} />);

  cards.forEach((card) => {
    const element = screen.getByAltText(card.name);
    expect(element).toBeInTheDocument();
  });
});
