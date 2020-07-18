import React from 'react';
import CharacterStream from '../characters/CharacterStream';
import CharacterBuilder from '../characters/CharacterBuilder'
import CharacterFocus from '../characters/CharacterFocus';
import '../../../resources/css/character.css'

export default function CharacterView() {


  return (
    <React.Fragment>
      <CharacterStream />
        <CharacterBuilder />
        
        <CharacterFocus />
      
    </React.Fragment>
  );
}

