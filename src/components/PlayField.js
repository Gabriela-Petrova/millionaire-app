import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { handleScoreChange } from "../store/actions";
import { decode } from "html-entities";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const PlayField = () => {
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
  console.log(options);
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

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
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

  return (
    <Box>
      <Typography mt={5}>
        {decode(response.results[questionIndex].question)}
      </Typography>

      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">
            {decode(data)}
          </Button>
        </Box>
      ))}

      <Box mt={5}>{questionIndex + 1} / 15</Box>
    </Box>
  );
};

export default PlayField;
