import { useNavigate } from "react-router-dom";
import Board from "../components/Board";
import HighScore from "../components/HighScore";
import { CircleChevronLeft } from "lucide-react";
import { PATH } from "../routes/paths";
import Timer from "../components/Timer";
import { useEffect, useState } from "react";

const GamePage = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(0);
  const [cards, setCards] = useState([{}]);

  const [score, setScore] = useState({ easy: [], medium: [], hard: [] });
  console.log("🚀 ~ GamePage ~ score:", score);

  const gameWon = async () => {
    console.log("All cards are flipped");
    await setScore((prevScore) => ({
      ...prevScore,
      easy: [...prevScore.easy, time],
    }));
    setTime(0);
  };

  useEffect(() => {
    if (cards.every((card) => card.isFlipped)) {
      gameWon();
    }
  }, [cards]);

  return (
    <div className="flex flex-col h-screen bg-black overflow-y-hidden text-green-700">
      <div className=" mt-5  mr-5 md:mt-10 md:mr-10 flex justify-between">
        <CircleChevronLeft
          className="size-20  ml-11 mt-4"
          onClick={() => navigate(PATH.root)}
        />
        <HighScore />
      </div>

      <div className="flex flex-col justify-center h-screen items-center space-y-14">
        {/*Timer*/}
        <Timer time={time} setTime={setTime} />
        {/* <Board /> */}
        <Board cards={cards} setCards={setCards} />
      </div>
    </div>
  );
};

export default GamePage;
