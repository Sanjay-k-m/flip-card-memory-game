import { CircleChevronLeft } from "lucide-react";
import HighScore from "../components/HighScore";
import { useNavigate } from "react-router-dom";
import { PATH } from "../routes/paths";
import { Context } from "../context/MyContext";
import { useContext } from "react";
import toast from "react-hot-toast";

const difficulties = [
  { name: "Easy", value: "easy", cardSize: 2 }, // 2*2
  { name: "Medium", value: "medium", cardSize: 4 }, //  4*4
  { name: "Hard", value: "hard", cardSize: 6 }, // 6x6
];

const SettingsPage = () => {
  const { level, setLevel } = useContext(Context);

  const navigate = useNavigate();
  const handleClick = (value) => {
    setLevel(value);
    if (level === value) return toast.error("Already set to " + value);
    toast.success("Level set to " + value);
  };
  return (
    <div className="h-screen bg-black overflow-y-hidden text-green-700">
      <div className="mt-5 mr-5 md:mt-10 md:mr-10 flex justify-between">
        <CircleChevronLeft
          className="size-20  ml-11 mt-4"
          data-tooltip-id="home"
          data-tooltip-content="Go back to home"
          onClick={() => navigate(PATH.root)}
        />
        <HighScore />
      </div>
      <div className="flex justify-center h-screen items-center ">
        <div className="sm:border-8 md:border-4 border-gray-500 rounded-3xl px-10 md:px-20 lg:px-44 py-10 md:py-20 space-y-5 md:space-y-10 ">
          {difficulties.map((difficulty) => (
            <div
              key={difficulty.value}
              className={`border-4 border-gray-600 px-5 md:px-10 py-5 md:py-10 rounded-md text-4xl text-center cursor-pointer font-kablammo ${
                level === difficulty.value && "bg-gray-900"
              } `}
              onClick={() => handleClick(difficulty.value)}
            >
              {difficulty.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
