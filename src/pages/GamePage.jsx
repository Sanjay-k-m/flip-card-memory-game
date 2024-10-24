import Board from "../components/Board";
import HighScore from "../components/HighScore";

const GamePage = () => {
  return (
    <div className="flex flex-col h-screen bg-black overflow-y-hidden text-green-700">
      <div className=" mt-5  mr-5 md:mt-10 md:mr-10 flex justify-end">
        <HighScore />
      </div>
      <div className="flex justify-center h-screen items-center">
        {/* <Board /> */}
        <Board />
      </div>
    </div>
  );
};

export default GamePage;
