import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";

const Board = ({ cardSize = 4 }) => {
  const [shuffleArray, setShuffledArray] = useState([]);
  const cardValues = useCallback(() => {
    const values = cardSize * cardSize;
    const newValue = values / 2;
    return newValue;
  }, [cardSize]);

  useEffect(() => {
    const values = cardValues();
    const valuesArray = Array.from({ length: values }, (_, index) => index + 1);
    const doubledArray = [...valuesArray, ...valuesArray];
    setShuffledArray(doubledArray.sort(() => Math.random() - 0.5));
  }, [cardValues]);

  const gridStyle = {
    gridTemplateColumns: `repeat(${cardSize}, minmax(0, 1fr))`,
  };

  const [firstValue, setFirstValue] = useState(null);
  console.log("🚀 ~ Board ~ firstValue:", firstValue);
  const [secondValue, setSecondValue] = useState(null);
  console.log("🚀 ~ Board ~ secondValue:", secondValue);

  const handleCardClick = (i) => {
    if (firstValue === null) {
      setFirstValue(i);
    } else if (secondValue === null) {
      setSecondValue(i);
    } else if (firstValue && secondValue) {
      setFirstValue(null);
      setSecondValue(null);
    }
  };

  return (
    <div
      style={gridStyle}
      className="border-8 rounded-2xl border-gray-600 p-4 grid gap-4"
    >
      {shuffleArray.map((i, index) => (
        <div
          key={index}
          className="border-2 rounded-2xl border-gray-600 p-12 justify-center flex text-6xl hover:bg-gray-700 transition duration-300 ease-in-out"
          onClick={() => handleCardClick(i)}
        >
          {i}
        </div>
      ))}
    </div>
  );
};

Board.propTypes = {
  cardSize: PropTypes.number,
};

export default Board;
