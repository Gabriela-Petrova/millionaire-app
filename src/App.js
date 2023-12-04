import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameWin from "./pages/GameWin";
import GameOver from "./pages/GameOver";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/game", element: <Game /> },
  { path: "/game-win", element: <GameWin /> },
  { path: "/game-over", element: <GameOver /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
