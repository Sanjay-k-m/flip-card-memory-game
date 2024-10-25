import HighScore from "../components/HighScore";

const difficulties = [
  { name: "Easy", value: "easy" }, // 2*2
  { name: "Medium", value: "medium" }, //  4*4
  { name: "Hard", value: "hard" }, // 6x6
];

const SettingsPage = () => {
  return (
    <div className="h-screen bg-black overflow-y-hidden text-green-700">
      <div className="mt-5 mr-5 md:mt-10 md:mr-10 flex justify-end">
        <HighScore />
      </div>
      <div className="flex justify-center h-screen items-center ">
        <div className="sm:border-8 md:border-4 border-gray-500 rounded-3xl px-10 md:px-20 lg:px-44 py-10 md:py-20 space-y-5 md:space-y-10 ">
          {difficulties.map((difficulty) => (
            <div
              key={difficulty.value}
              className="border-4 border-gray-600 px-5 md:px-10 py-5 md:py-10 rounded-md text-4xl text-center cursor-pointer"
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
