import React from 'react';
import CharacterStream from '../characters/CharacterStream';
import CharacterBuilder from '../characters/CharacterBuilder'
import CharacterFocus from '../characters/CharacterFocus';
import { useSelectiveFocus } from '../../useSelectiveFocus';

export default function CharacterView() {

  const { isCharacterBuilderVisible } = useSelectiveFocus();

  return (
    <React.Fragment>
      <CharacterStream />
      {isCharacterBuilderVisible ?
        <CharacterBuilder />
        :
        <CharacterFocus />
      }
    </React.Fragment>
  );
}

