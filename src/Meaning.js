import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  if (props.meaning.definitions[0].example) {
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>
          <strong>Definition:</strong> {props.meaning.definitions[0].definition}
        </p>
        <p>
          Example: <em>{props.meaning.definitions[0].example}</em>
        </p>
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>
          <strong>Definition:</strong> {props.meaning.definitions[0].definition}
        </p>
      </div>
    );
  }
}
