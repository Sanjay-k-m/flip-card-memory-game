import { useNavigate } from "react-router-dom";
import Board from "../components/Board";
import HighScore from "../components/HighScore";
import { CircleChevronLeft } from "lucide-react";
import { PATH } from "../routes/paths";
import Timer from "../components/Timer";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/MyContext";
import toast from "react-hot-toast";

const GamePage = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(1000);
  const [cards, setCards] = useState([{}]);
  const { level, score, setScore } = useContext(Context);
  const gameWon = async () => {
    const currentTime = time;
    const previousTime = score[level]?.[0];

    if (previousTime === undefined || currentTime < previousTime) {
      if (currentTime !== 1000) {
        toast.success("New High Score : " + currentTime + "Sec ", {
          duration: 2000,
        });
      }
      await setScore((prevScore) => ({
        ...prevScore,
        [level]: [currentTime, ...prevScore[level].slice(1)].sort(
          (a, b) => a - b
        ),
      }));
    }

    setTime(0);
  };

  console.log(score);

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
