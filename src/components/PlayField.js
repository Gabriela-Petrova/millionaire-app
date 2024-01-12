import React from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import usePlayFieldLogic from "../hooks/usePlayFieldLogic";
import { decode } from "html-entities";
import Timer from "./Timer";

const PlayField = () => {
  const { loading, options, questionIndex, response, handleClickAnswer } =
    usePlayFieldLogic();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ width: "100%" }}
    >
      <Timer questionIndex={questionIndex} />

      <Typography mt={5}>
        {decode(response.results[questionIndex].question)}
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        mt={2}
        style={{ width: "100%" }}
      >
        {options.map((data, id) => (
          <Button
            key={id}
            onClick={() => handleClickAnswer(data)}
            variant="contained"
            style={{ marginBottom: "10px", width: "49%" }}
          >
            {decode(data)}
          </Button>
        ))}
      </Box>

      <Box mt={5}>{questionIndex + 1} / 15</Box>
    </Box>
  );
};

export default PlayField;
