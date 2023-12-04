import { Link } from "react-router-dom";

function Game() {
  return (
    <div>
      <h1>This is the Game page</h1>
      <Link to="/game-win">
        <button>Correct Answer</button>
      </Link>
      <Link to="/game-over">
        <button>Wrong Answer</button>
      </Link>
    </div>
  );
}

export default Game;
