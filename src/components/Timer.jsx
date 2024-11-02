import PropTypes from "prop-types";
import { TimerIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Timer = ({ time, setTime }) => {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (started) {
        setTime((prevTime) => prevTime + 1);
      }
    }, 1000);

    const startTimerId = setTimeout(() => {
      setStarted(true);
    }, 2000);

    return () => {
      clearInterval(timerId);
      clearTimeout(startTimerId);
    };
  }, [started]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex items-center gap-2">
      <TimerIcon className="size-10 text-yellow-500" />
      <span className="text-4xl font-bold">{formatTime(time)}</span>
    </div>
  );
};

Timer.propTypes = {
  setTime: PropTypes.func,
  time: PropTypes.number,
};

export default Timer;
