import { useEffect, useState } from "react";
const SECS_PER_QUESTION = 10;
export default function ({ dispatch, questions }) {
  const [secondsRemaining, setSecondsRemaining] = useState(
    () => questions.length * SECS_PER_QUESTION
  );
  const minutes = Math.floor(secondsRemaining / 60);
  const second = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        setSecondsRemaining((secondsRemaining) => {
          return secondsRemaining - 1;
        });
      }, 1000);

      return function () {
        clearInterval(id);
      };
    },
    [secondsRemaining]
  );

  useEffect(
    function () {
      if (secondsRemaining === 0) {
        dispatch({ type: "finished" });
      }
    },
    [secondsRemaining]
  );

  return (
    <div className="timer">
      {minutes < 10 ? "0" : ""}
      {minutes}:{second < 10 ? "0" : ""}
      {second}
    </div>
  );
}
