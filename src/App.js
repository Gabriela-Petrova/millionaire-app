import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameWin from "./pages/GameWin";
import GameOver from "./pages/GameOver";
import { Box, Container } from "@mui/material";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/game", element: <Game /> },
  { path: "/game-win", element: <GameWin /> },
  { path: "/game-over", element: <GameOver /> },
]);

function App() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <RouterProvider router={router} />
      </Box>
    </Container>
  );
}

export default App;
