import { Link } from "react-router-dom";

function GameWin() {
  return (
    <div>
      <h1>Congratulations! You win!</h1>
      <Link to="/">
        <button>Play again</button>
      </Link>
    </div>
  );
}

export default GameWin;
