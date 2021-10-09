import React, { useState, useEffect } from "react";
import { Button } from "./Button";

export const TimeForm = ({ onClick, onChangeValue, value }) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    value >= 1000 ? setDisabled(false) : setDisabled(true);
  }, [value]);

  return (
    <>
      <div>
        <h3>Choose time</h3>
        <p>minimum time: 1000ms,1000 = 1s</p>
      </div>
      <form>
        <input defaultValue={value} type="number" onChange={onChangeValue} />
        <Button variant="btn btn-lg" disabled={disabled} text="Submit time" onClick={onClick} />
      </form>
    </>
  );
};
