import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "./useAxios";
import { handleScoreChange } from "../store/actions";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const usePlayFieldLogic = () => {
  const { question_category, question_difficulty, amount_of_questions, score } =
    useSelector((state) => state);

  let apiUrl = `/api.php?amount=${amount_of_questions}&type=multiple`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }

  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (response?.results?.length > 0) {
      const question = response.results[questionIndex];
      if (question) {
        let answers = [...question.incorrect_answers];
        answers.splice(
          getRandomInt(question.incorrect_answers.length),
          0,
          question.correct_answer
        );
        setOptions(answers);
      }
    }
  }, [response, questionIndex]);

  const handleClickAnswer = (selectedAnswer) => {
    const question = response.results[questionIndex];

    if (selectedAnswer === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    } else {
      navigate("/game-over");
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/game-win");
    }
  };

  return {
    loading,
    options,
    questionIndex,
    response,
    handleClickAnswer,
  };
};

export default usePlayFieldLogic;
