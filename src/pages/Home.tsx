import React from 'react';
import {
  Typography, Box, Container, Grid, type Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import TalkCard from '../components/TalkCard';
import { talks } from '../config/talks';

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\'https://images.unsplash.com/photo-1626125345510-4603468eedfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80\')',
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
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.hero}>
        <Box>Tech Lead Conf 2023- Talk Summaries</Box>
      </Box>
      <Container maxWidth="md" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Talk Summaries
        </Typography>
        <Grid container spacing={3}>
          {talks.map((talk) => (<TalkCard talk={talk} />))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
