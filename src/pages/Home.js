import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Who wants to be a millionaire?</h1>
      <Link to="/game">
        <button>Start Game</button>
      </Link>
    </div>
  );
}

export default Home;
