import React from 'react';
import './TalkList.scss';
import { Link } from 'react-router-dom';
import kebabToCapitalCase from '../utils/kebabToCapitalCase';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';

function TalkList() {
  const talkFiles = require.context('../../public/talks', false, /\.md$/);
  const talks = talkFiles.keys().map((talkFile) => {
    const slug = talkFile.slice(2, -3);
    return (
      <ListItem key={slug}>
        <ListItemText>
           <Link to={`/talks/${slug}`}>{kebabToCapitalCase(slug)}</Link>
        </ListItemText>
      </ListItem>
    );
  });

  return (
    <Container maxWidth="sm" >
      <Typography variant="h1" align="center" gutterBottom sx={{ fontSize: '32px', marginTop: '20px', fontWeight: 700 }}>
        Talk Summaries
      </Typography>
      <List>
      <ul>{talks}</ul>
      </List>
    </Container>
  );
}

export default TalkList;
