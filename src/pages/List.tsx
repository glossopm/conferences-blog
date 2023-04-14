import React from 'react';
import './List.scss';
import { Link } from 'react-router-dom';
import {
  Container, List as MuiList, ListItem, ListItemText, Typography,
} from '@mui/material';
import kebabToCapitalCase from '../utils/kebabToCapitalCase';
import stringToCapitalCase from '../utils/stringToCapitalCase';

interface Props {
  files: __WebpackModuleApi.RequireContext;
  folder: string;
}

function List({ files, folder }: Props) {
  const listItems = files.keys().map((file) => {
    const slug = file.slice(2, -3);
    return (
      <ListItem key={slug}>
        <ListItemText>
          <Link to={`/${folder}/${slug}`}>{kebabToCapitalCase(slug)}</Link>
        </ListItemText>
      </ListItem>
    );
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h1" align="center" gutterBottom sx={{ fontSize: '32px', marginTop: '20px', fontWeight: 700 }}>
        {stringToCapitalCase(folder)}
        {' '}
        Summaries
      </Typography>
      <MuiList>
        {listItems}
      </MuiList>
    </Container>
  );
}

export default List;
