import { useContext } from "react";
import { Context } from "../context/MyContext";

const ScorePage = () => {
  const { score, level } = useContext(Context);
  return (
    <div>
      <div className="flex flex-col items-center bg-black justify-center h-screen ">
        <div className="text-4xl font-bold text-green-700 font-kablammo mb-10">
          Score
        </div>
        <div className="text-4xl font-bold text-green-700  flex flex-col items-center">
          <div> Easy : {score.easy}</div>
          <div> Medium : {score.medium}</div>
          <div> Hard : {score.hard}</div>
        </div>
      </div>
    </div>
  );
};

export default ScorePage;
