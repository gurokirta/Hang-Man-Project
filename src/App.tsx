import { useState } from "react";
import words from "./wordlist.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  return (
    <div className="App">
      <h1>{wordToGuess}</h1>
    </div>
  );
}

export default App;
