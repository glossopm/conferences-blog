import React from 'react';
import { Container, type Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import MarkdownRenderer from '../components/MarkdownRenderer';

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80\')',
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
      height: 300,
      fontSize: '3em',
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
    height: '100vh',
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
}));

function Talk() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.blogsContainer}>
      <MarkdownRenderer />
    </Container>
  );
}

export default Talk;
