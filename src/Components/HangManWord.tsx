import "/src/App.scss";

type HangManWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangManWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangManWordProps) => {
  return (
    <div className="HangManWord">
      {wordToGuess.split("").map((letter, index) => (
        <span className="underLine" key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangManWord;
