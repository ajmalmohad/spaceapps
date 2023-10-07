import React from "react";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="overlap-group">
          <div className="text-wrapper">Username</div>
          <img className="ellipse" alt="Ellipse" src="ellipse-1.png" />
        </div>
        <button className="button text-wrapper-2">Profile</button>
        <button className="button text-wrapper-4">Change Password</button>
        <button className="button log-out">
          <span className="span">Log</span>
          <span className="text-wrapper-3">&nbsp;</span>
          <span className="span">Out</span>
        </button>
      </div>
    </div>
  );
};
