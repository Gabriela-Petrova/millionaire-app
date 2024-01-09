import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import useAxios from "../hooks/useAxios";
import logo from "../assets/pngaaa.com-3782989.png";

function Home() {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something went wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const hendleSubmit = (e) => {
    e.preventDefault();
    navigate("/game");
  };

  return (
    <>
      <img src={logo} alt="Logo" />
      <form onSubmit={hendleSubmit}>
        <Typography variant="h3" fontWeight="bold">
          Start Game
        </Typography>
        <Dropdown options={response.trivia_categories} label="Category" />
        <Dropdown options={difficultyOptions} label="Difficulty" />

        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Get Started
          </Button>
        </Box>
      </form>
    </>
  );
}

export default Home;
