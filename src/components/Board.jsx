import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";

const Board = ({ cardSize = 5 }) => {
  const [shuffleArray, setShuffledArray] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [solvedCards, setSolvedCards] = useState([]);
  const [solvedIndex, setSolvedIndex] = useState([]);
  console.log("  Board  solvedCards:", solvedCards);

  const cardValues = useCallback(() => {
    const values = cardSize * cardSize;
    const newValue = Math.floor(values / 2);
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
  console.log("  Board  firstValue:", firstValue);
  const [secondValue, setSecondValue] = useState(null);
  console.log("  Board  secondValue:", secondValue);

  const [firstIndexValue, setFirstIndexValue] = useState(null);
  const [secondIndexValue, setSecondIndexValue] = useState(null);

  const handleCardClick = async (i, index) => {
    setShowCard(true);
    if (firstValue === null) {
      setFirstValue(i);
      setFirstIndexValue(index);
      setSolvedIndex([...solvedIndex, index]);
    } else if (secondValue === null) {
      setSecondValue(i);
      setSecondIndexValue(index);
      setSolvedIndex([...solvedIndex, index]);
      console.log(firstValue, secondValue);
      if (firstValue === secondValue) {
        console.log("im here");
        setSolvedCards([...solvedCards, firstValue]);
        setFirstValue(null);
        setSecondValue(null);
        solvedIndex.push(firstIndexValue);
        solvedIndex.push(secondIndexValue);
        setFirstIndexValue(null);
        setSecondIndexValue(null);
      }
      if (firstValue !== secondValue) {
        console.log("im here");
        
        setTimeout(() => {
          setSolvedIndex(solvedIndex.filter((item) => item !== firstIndexValue && item !== secondIndexValue));
          setFirstIndexValue(null);
        }, 1000);
        setSecondIndexValue(null);
      }
    }
  };
  console.log(solvedIndex);

  useEffect(() => {
    if (firstValue !== null && secondValue !== null) {
      if (firstValue !== secondValue) {
        setTimeout(() => {
          setShowCard(false);
          setFirstValue(null);
          setSecondValue(null);
        }, 0);
      } else {
        setSolvedCards([...solvedCards, firstValue]);
        setFirstValue(null);
        setSecondValue(null);
        setShowCard(false);
      }
    }
  }, [firstValue, secondValue]);

  return (
    <div
      style={gridStyle}
      className="border-8 rounded-2xl border-gray-600 p-4 grid gap-4"
    >
      {shuffleArray.map((i, index) => (
      
          <div
            key={index}
            className="border-2 rounded-2xl border-gray-600  justify-center items-center flex text-6xl hover:bg-gray-700 transition duration-300 ease-in-out size-40"
            onClick={
              solvedCards.includes(i)
                ? undefined
                : async () => await handleCardClick(i, index)
            }
          >
            {solvedCards.includes(i) ? (
              <h1>{i}</h1>
            ) : solvedIndex.includes(index) ? (
              <h1>{i}</h1>
            ) : (
              "?"
            )}
          </div>
    
      ))}
    </div>
  );
};

Board.propTypes = {
  cardSize: PropTypes.number,
};

export default Board;

