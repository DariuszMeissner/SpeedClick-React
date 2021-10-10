import React from "react";

export const GameDisplay = ({ points, timer, currTime }) => {
  return (
    <div className="game__display">
      <div className="row">
        <div className="col col__left">
          <h5 className="game__points">Points: {points}</h5>
        </div>
        <div className="col col__right">
          <h5 className="game__start">Starting time: {currTime} ms</h5>
        </div>
        <div className="col-12 col__points">
          <h3 className="game__countdown">Countdown: {timer} ms</h3>
        </div>
      </div>
    </div>
  );
};
