import React from 'react';
import CharacterStream from './CharacterStream';
import CharacterBuilder from './CharacterBuilder'
import CharacterFocus from './CharacterFocus';
import { useSelectiveFocus } from '../useSelectiveFocus';

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

