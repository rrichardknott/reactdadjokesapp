import { useState } from "react";
import jokeList from "../data";

function App() {
  const [joke, setJoke] = useState(jokeList[0]);

  const handleJokeClick = () => {
    let randomNumber = Math.floor(Math.random() * jokeList.length);
    setJoke(jokeList[randomNumber]);
  };

  return (
    <div className="container">
      <ul>
        <li className="joke">{joke}</li>
      </ul>
      <button onClick={handleJokeClick} className="btn">
        Another Joke
      </button>
    </div>
  );
}

export default App;
