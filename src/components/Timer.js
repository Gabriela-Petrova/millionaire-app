import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Timer.module.css";

const Timer = ({ questionIndex }) => {
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer === 0) return navigate("/game-over");

    const interval = setInterval(() => {
      setTimer((second) => second - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    setTimer(60);
  }, [questionIndex]);

  return timer;
};

export default Timer;
