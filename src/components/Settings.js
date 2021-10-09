import React, { useState } from "react";
import { TimeForm } from "./TimeForm";
import { Game } from "./Game";

export const Settings = () => {
  const [start, setStart] = useState(false);
  const [value, setValue] = useState(1000);

  const handleTime = (e) => {
    e.preventDefault();
    setStart((prev) => !prev);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return start && value > 0 ? <Game time={value} onClick={handleTime} /> : <TimeForm onClick={handleTime} value={value} onChangeValue={handleChange} />;
};