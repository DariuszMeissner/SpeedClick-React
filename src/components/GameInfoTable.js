import React, { useState, useEffect } from "react";

export const GameInfoTable = ({ scores }) => {
  const [sortedPoints, setSortedPoints] = useState([]);

  useEffect(() => {
    const sortBestPoints = scores.sort((a, b) => b - a);
    setSortedPoints(sortBestPoints);
  }, [scores]);

  return (
    <div className="game__infoTable">
      <h4>Best score: {sortedPoints[0]}</h4>
      <h5>Your scores</h5>

      {sortedPoints.map((el) => el !== 0 && <div>{el}</div>)}
    </div>
  );
};
