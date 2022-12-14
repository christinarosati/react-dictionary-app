import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  function handleListen(event) {
    event.preventDefault();
    let audioElement = document.querySelector("audio");
    audioElement.play();
  }

  return (
    <div className="Phonetics">
      <button type="button" className="btn audio-btn" onClick={handleListen}>
        <audio src={props.phonetics.audio}></audio>
        🔈
      </button>
      <span className="phonetic-text"> {props.phonetics.text}</span>
    </div>
  );
}
