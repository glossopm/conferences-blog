import React from 'react';
import List from './List';

function WorkshopList() {
  const talkFiles = require.context('../../public/workshops', false, /\.md$/);

  return (
    <List folder="workshops" files={talkFiles} />
  );
}

export default WorkshopList;
