import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { HeaderSmall } from "./HeaderSmall";
import { IntroModal } from "./IntroModal";

export const Intro = ({ onClick }) => {
  const [modal, setModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, 2000);
  }, []);

  return modal ? (
    <IntroModal />
  ) : (
    <>
      <HeaderSmall />
      <div style={{ backgroundColor: "#000" }} className="intro mainContainer">
        <p className="intro__inc">The game is about clicking a button within a certain time.</p>
        <p className="intro__inc">
          When this is successful,
          <br /> the time is reset to the initial value - 50ms
        </p>
        <Button variant="btn btn-primary btn-lg" text="Start The Game" onClick={onClick} />
      </div>
    </>
  );
};
