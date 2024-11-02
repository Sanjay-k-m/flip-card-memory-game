import { useContext } from "react";
import { Context } from "../context/MyContext";

const HighScore = () => {
  const { level, score } = useContext(Context);
  return (
    <div className="flex flex-col items-center bg-gray-900 p-2 md:p-4 rounded-xl ">
      <div className="text-sm md:text-4xl font-bold text-green-700 font-kablammo">
        High Score{" "}
      </div>
      <div className="border-t-2 border-green-700 md:my-2" />
      <div className="text-sm md:text-4xl font-bold text-green-700"> {score[level]?.[0]} </div>
    </div>
  );
};

export default HighScore;
