import React from "react";
import { Button } from "./Button";
import { GameInfoTable } from "./GameInfoTable";

export const GameInfo = ({onClick, timer, setNewGame, scores}) => {
  return (
    <div className="game__info">
      <Button variant="btn btn-light btn-block" text="Change time" onClick={onClick} />
      {timer === 0 && <Button variant="btn btn-secondary btn-block" text="New Game" onClick={setNewGame} />}
      <GameInfoTable scores={scores}/>
    </div>
  );
};
