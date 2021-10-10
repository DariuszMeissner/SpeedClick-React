import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { GameDisplay } from "./GameDisplay";
import { GameInfo } from "./GameInfo";
import { GameNav } from "./GameNav";
import { PointsModal } from "./PointsModal";

export const Game = ({ time, onClick }) => {
  const [timer, setTimer] = useState(time);
  const [currTime, setCurrTime] = useState(time);
  const [points, setPoints] = useState(0);
  const [start, setStart] = useState(false);
  const [newGameButton, setNewGameButton] = useState(false);
  const [scores, setScores] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setTimer((prev) => (prev <= 0 ? (clearInterval(interval), (prev = 0)) : (prev = prev - 50)));
      }, 50);
    }
  }, [start]);

  useEffect(() => {
    setNewGameButton((prev) => !prev);
    setScores( prev => [...prev, points ]);
    setDisabled(true);
  }, [timer === 0]);
  
  const addPoint = () => {
    if (start) {
      setPoints( prev => prev + 1);
      setCurrTime( prev => prev - 50);
      setTimer( prev => prev = currTime);
    }
  };
  const handleStart = () => {
    setStart((prev) => !prev);
    setDisabled(prev => !prev);
  };
  const setNewGame = () => {
    setTimer(time);
    setCurrTime(time);
    setPoints(0);
    setStart(false);
    setNewGameButton(false);
  };

  return (
    <>
    {/* {timer === 0 && <PointsModal/>} */}
      <div className="game mainContainer">
        <div className="row">
          <div className="col-9">
            <GameDisplay points={points} timer={timer} currTime={currTime} />
            <GameNav start={start} disabled={disabled} timer={timer} addPoint={addPoint} handleStart={handleStart} />
          </div>
          <div className="col-3">
            <GameInfo scores={scores} timer={timer} setNewGame={setNewGame} onClick={onClick} />
          </div>
        </div>
      </div>
    </>
  );
};
