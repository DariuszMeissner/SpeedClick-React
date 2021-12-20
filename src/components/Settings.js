import React, { useState } from "react";
import { Time } from "./Time";
import { Game } from "./game/Game";
import { HeaderSmall } from "./header/HeaderSmall";


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

  return (
    <>
      <HeaderSmall />
      {start && value > 0 ? <Game time={value} onClick={handleTime} /> : <Time onClick={handleTime} value={value} onChangeValue={handleChange} />}
    </>
  );
};
