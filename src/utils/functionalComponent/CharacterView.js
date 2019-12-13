import React from "react";
import CharacterStream from "./CharacterStream";
import CharacterFocus from "./CharacterFocus";
import CharacterBuilder from "./CharacterBuilder";
import "../../resources/css/character.css";

export default function CharacterView() {

  return (
    <div className="characterBuilder">
      <CharacterStream />
      {/* <CharacterFocus /> */}
      <CharacterBuilder />
    </div>
  );
}

