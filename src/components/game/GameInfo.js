import React from "react";
import { Button } from "../button/Button";
import { GameInfoTable } from "../game/GameInfoTable";

export const GameInfo = ({ onClick, timer, setNewGame, scores }) => {
  return (
    <div className="game__info">
      <div class="d-grid gap-2">
        <Button variant="btn btn-light btn-block" text="Change time" onClick={onClick} />
        {timer === 0 && <Button variant="btn btn-secondary btn-block" text="New Game" onClick={setNewGame} />}
      </div>
      <GameInfoTable scores={scores} />
    </div>
  );
};
