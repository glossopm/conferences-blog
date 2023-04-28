import React from 'react';
import './ListByConference.scss';
import { Link } from 'react-router-dom';
import {
  Container, List as MuiList, ListItem, ListItemText, Typography,
} from '@mui/material';
import kebabToCapitalCase from '../utils/kebabToCapitalCase';
import stringToCapitalCase from '../utils/stringToCapitalCase';
import { talks } from '../config/talks';

interface Props {
  folder: string;
}

function ListByConference({ folder }: Props) {
  const items = talks.reduce(
    (acc: Record<string, JSX.Element[]>, item) => {
      const correctFolder = item.summaryPath.includes(folder);
      const name = kebabToCapitalCase(item.summaryPath.split('/').at(-1) || '');

      if (!name || !correctFolder) {
        return acc;
      }
      const listItem = (
        <ListItem key={item.id}>
          <ListItemText>
            <Link to={item.summaryPath}>{name}</Link>
          </ListItemText>
        </ListItem>
      );

      return {
        ...acc,
        [item.conference]: [...(acc[item.conference] || []), listItem],
      };
    },
    {},
  );

  return (
    <Container maxWidth="sm">
      <Typography variant="h1" align="center" gutterBottom sx={{ fontSize: '32px', marginTop: '20px', fontWeight: 700 }}>
        {stringToCapitalCase(folder)}
      </Typography>
      <div>
        {Object.entries(items).map(([conferenceName, listItems]) => (
          <React.Fragment key={conferenceName}>
            <Typography variant="h2" align="left" gutterBottom sx={{ fontSize: '20px', marginTop: '20px', fontWeight: 700 }}>{conferenceName}</Typography>
            <MuiList>
              {listItems}
            </MuiList>
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
}

export default ListByConference;
