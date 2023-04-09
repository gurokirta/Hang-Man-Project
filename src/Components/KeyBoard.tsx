import "/src/App.scss";
import styles from "./KeyBoard.module.css";

const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyBoardProps = {
  disabled?: boolean;
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const KeyBoard = ({
  disabled = false,
  activeLetter,
  inactiveLetters,
  addGuessedLetter,
}: KeyBoardProps) => {
  return (
    <div className="KeyBoard">
      {keys.map(key => {
        const isActive = activeLetter.includes(key);
        const isInActive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""}
            ${isInActive ? styles.inactive : ""}`}
            key={key}
            disabled={isInActive || isActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default KeyBoard;
