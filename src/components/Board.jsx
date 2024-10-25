import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";

const Board = ({ cardSize = 2 }) => {
  const [cards, setCards] = useState([{}]);
  const [selectedFirstValue, setSelectedFirstValue] = useState(null);
  console.log("🚀 ~ Board ~ selectedFirstValue:", selectedFirstValue);
  const [selectedSecondValue, setSelectedSecondValue] = useState(null);
  console.log("🚀 ~ Board ~ selectedSecondValue:", selectedSecondValue);
  console.log("🚀 ~ Board ~ cards:", cards);
  const generateCards = useCallback(() => {
    let id = 0;
    const values = [...Array((cardSize * cardSize) / 2).keys()].map(
      (i) => i + 1
    );
    const shuffledValues = [...values, ...values].map((value) => ({
      value,
      id: id++,
      isFlipped: false,
    }));
    for (let i = shuffledValues.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledValues[i], shuffledValues[j]] = [
        shuffledValues[j],
        shuffledValues[i],
      ];
    }
    setCards(shuffledValues);
  }, [cardSize]);

  useEffect(() => {
    generateCards();
  }, [generateCards]);

  const gridTemplateColumns = `repeat(${cardSize}, 1fr)`;
  const gridTemplateRows = `repeat(${cardSize}, 1fr)`;

  const cardStyle = {
    gridTemplateColumns,
    gridTemplateRows,
  };

  const handleClick = (card) => () => {
    if (selectedFirstValue === null) {
      setSelectedFirstValue(card);
    } else if (selectedSecondValue === null) {
      setSelectedSecondValue(card);
    }
  };

  useEffect(() => {
    if (selectedFirstValue) {
      setCards((prevCards) =>
        prevCards.map((card) => {
          if (card.id === selectedFirstValue.id) {
            return { ...card, isFlipped: true };
          }
          return card;
        })
      );
    }
    if (selectedSecondValue) {
      setCards((prevCards) =>
        prevCards.map((card) => {
          if (card.id === selectedSecondValue.id) {
            return { ...card, isFlipped: true };
          }
          return card;
        })
      );
    }
    if (selectedFirstValue && selectedSecondValue) {
      if (selectedFirstValue.value === selectedSecondValue.value) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (
              card.id === selectedFirstValue.id ||
              card.id === selectedSecondValue.id
            ) {
              return { ...card, isFlipped: true };
            }
            return card;
          })
        );

        setSelectedFirstValue(null);
        setSelectedSecondValue(null);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) => {
              if (
                card.id === selectedFirstValue.id ||
                card.id === selectedSecondValue.id
              ) {
                return { ...card, isFlipped: false };
              }
              return card;
            })
          );
          setSelectedFirstValue(null);
          setSelectedSecondValue(null);
        }, 1000);
      }
    }
  }, [selectedFirstValue, selectedSecondValue]);

  return (
    <div
      className="grid gap-2 border-8 border-gray-600 p-5 rounded-lg"
      style={cardStyle}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className="border-4 border-gray-600 px-5 md:px-10 py-5 md:py-10 rounded-md text-4xl md:text-6xl text-center cursor-pointer"
          onClick={
            card.isFlipped
              ? null
              : card.id === selectedFirstValue?.id
              ? null
              : handleClick(card)
          }
        >
          {card.isFlipped ? card.value : "?"}
        </div>
      ))}
    </div>
  );
};

Board.propTypes = {
  cardSize: PropTypes.number,
};

export default Board;
