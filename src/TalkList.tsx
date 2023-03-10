import React from 'react';
import { Link } from 'react-router-dom';
import kebabToCapitalCase from './utils/kebabToCapitalCase';

function TalkList() {
  const talkFiles = require.context('../public/talks', false, /\.md$/);
  const talks = talkFiles.keys().map((talkFile) => {
    const slug = talkFile.slice(2, -3);
    return (
      <li key={slug}>
        <Link to={`/talks/${slug}`}>{kebabToCapitalCase(slug)}</Link>
      </li>
    );
  });

  return (
    <div>
      <h1>Talks</h1>
      <ul>{talks}</ul>
    </div>
  );
}

export default TalkList;
