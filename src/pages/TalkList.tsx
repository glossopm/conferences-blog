import React from 'react';
import List from './List';

function TalkList() {
  const talkFiles = require.context('../../public/talks', false, /\.md$/);

  return (
    <List folder="talks" files={talkFiles} />
  );
}

export default TalkList;
