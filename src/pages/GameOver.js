import { Link } from "react-router-dom";

function GameOver() {
  return (
    <div>
      <h1>Game Over</h1>
      <Link to="/">
        <button>Play again</button>
      </Link>
    </div>
  );
}

export default GameOver;
