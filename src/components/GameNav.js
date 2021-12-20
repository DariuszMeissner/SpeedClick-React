import React from "react";
import { Button } from "./Button";

export const GameNav = ({ start, disabled, addPoint, handleStart }) => {
  return (
    <div className="game__nav">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          {start ?
            <Button variant="btn btn-danger btn-xl"
              text="Click me"
              disabled={disabled}
              onClick={addPoint} />
            : <Button variant="btn btn-warning btn-lg" text="Start" onClick={handleStart} />
          }
        </div>
      </div>
    </div>
  );
};
