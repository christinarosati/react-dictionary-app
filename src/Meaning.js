import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning.definitions[0].example) {
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        <div className="definition">
          {props.meaning.definitions[0].definition}
        </div>
        <div className="example">{props.meaning.definitions[0].example}</div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        <div className="definition">
          {props.meaning.definitions[0].definition}
        </div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  }
}
