import React, { useState, useEffect } from "react";
import { Button } from "./button/Button";

export const Time = ({ onClick, onChangeValue, value }) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    value >= 1000 ? setDisabled(false) : setDisabled(true);
  }, [value]);

  return (
    <div className="time mainContainer">
      <h2 className="time__title">Choose time</h2>
      <form className="time__form">
        <input className="time__input form-control" defaultValue={value} type="number" onChange={onChangeValue} />
        <p className="time__desc">minimum time: 1000ms,1000 = 1s</p>
        <Button variant="btn btn-success btn-lg" disabled={disabled} text="Submit time" onClick={onClick} />
      </form>
    </div>
  );
};
