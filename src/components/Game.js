import React, { useEffect, useState } from "react";
import { Button } from "./Button";


export const Game = ({ time, onClick }) => {
  const [timer, setTimer] = useState(time);
  const [currTime, setCurrTime] = useState(time);
  const [points, setPoints] = useState(0);
  const [button, setButton] = useState(false);
  const [clickMe, setClickMe] = useState(false);
  const [start, setStart] = useState(false);
  const [newGameButton, setNewGameButton] = useState(false);

  useEffect(() => {
    if (start) {
      setClickMe((prev) => !prev);
      const interval = setInterval(() => {
        setTimer((prev) => (prev <= 0 ? (clearInterval(interval), (prev = 0)) : (prev = prev - 50)));
      }, 50);
    }
  }, [start]);

  useEffect(() => {
    setNewGameButton((prev) => !prev);
    setClickMe((prev) => !prev);
  }, [timer===0]);

  const addPoint = () => {
    if (start) {
      setPoints((prev) => prev + 1);
      setCurrTime((prev) => prev - 50);
      setTimer((prev) => (prev = currTime));
    }
  };
  const handleStart = () => {
    setStart((prev) => !prev);
    setButton(true);
  };
  const setNewGame = () => {
    setTimer(time);
    setCurrTime(time);
    setPoints(0);
    setButton(false);
    setClickMe(false);
    setStart(false);
    setNewGameButton(false);
  };

  return (
    <>
      <div>
        <h1>Odliczanie: {timer}</h1>
        <h2>Czas początkowy: {currTime}</h2>
        <h2>
          Punkty: {points} {button}
        </h2>
      </div>
      {start && timer !==0 ? <Button text='Click me' disabled={clickMe} onClick={addPoint}/> : null}
      {!start ? <Button text='Start' disabled={button} onClick={handleStart}/> : null}
      {timer ===0 && <Button text='New Game' disabled={newGameButton} onClick={setNewGame}/>}
      <Button text='Change time' onClick={onClick}/>

    </>
  );
};
