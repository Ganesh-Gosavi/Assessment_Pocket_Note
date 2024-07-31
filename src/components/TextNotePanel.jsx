import React from "react";
import "./TextNotePanel.css";
import elips from '../image/elips.png'

export default function TextNotePanel({ item }) {
  return (
    <div className="singleTextBox">
      <p className="finalText">{item.note}</p>
      <div className="dateTime">
        <span>{item.date}&nbsp;&nbsp;&nbsp;</span>
        <img src={elips}></img>
        <span>&nbsp;&nbsp;&nbsp;{item.time}</span>
      </div>
    </div>
  );
}
