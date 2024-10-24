import { useNavigate } from "react-router-dom";
import { PATH } from "../routes/paths";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center bg-black text-green-700 flex-col overscroll-none font-kablammo">
      <div className="sm:mb01 md:mb-10 lg:mb-28  ">
        <h1 className="text-2xl lg:text-9xl ">Memory Game</h1>
        <div className="border-4 border-gray-600" />
      </div>
      <div className="sm:border-8 md:border-4 border-gray-500 rounded-3xl px-10 md:px-20 lg:px-44 py-10 md:py-20 space-y-5 md:space-y-10 ">
        <div className="border-4 border-gray-600 px-5 md:px-10 py-5 md:py-10 rounded-md text-4xl md:text-6xl text-center">
          <button onClick={() => navigate(PATH.game)}>
            Start
          </button>
        </div>
        <div className="border-4 border-gray-600 px-5 md:px-10 py-5 md:py-10 rounded-md text-4xl md:text-6xl text-center">
          H-Score
        </div>
      </div>
    </div>
  );
};

export default Home;
