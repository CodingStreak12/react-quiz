import { useEffect } from "react";
export default function ({ dispatch, seconds }) {
  const minutes = Math.floor(seconds / 60);
  const second = seconds % 60;
  useEffect(function () {
    const id = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);

    return function () {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="timer">
      {minutes < 10 ? "0" : ""}
      {minutes}:{second < 10 ? "0" : ""}
      {second}
    </div>
  );
}
