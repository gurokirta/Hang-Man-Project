import "/src/App.scss";

const head = <div className="head"></div>;
const body = <div className="Body"></div>;
const rightArm = <div className="Right__Arm"></div>;
const leftArm = <div className="Left__Arm"></div>;
const rightLeg = <div className="Right__Leg"></div>;
const leftLeg = <div className="Left__Leg"></div>;

type HangManDrawingProps = {
  numberOfGuesses: number;
};

const bodyParts = [head, body, rightArm, leftArm, rightLeg, leftLeg];

const HangmanDrawing = ({ numberOfGuesses }: HangManDrawingProps) => {
  return (
    <div className="HangManDrawing">
      {bodyParts.slice(0, numberOfGuesses)}
      <div className="HangManDrawing__rowLine"></div>
      <div className="HangManDrawing__halfLine"></div>
      <div className="HangManDrawing__colLine"></div>
      <div className="HangManDrawing__bottomLine"> </div>
    </div>
  );
};

export default HangmanDrawing;
