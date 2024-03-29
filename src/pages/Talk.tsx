import React from 'react';
import { Container, Link, type Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useParams } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { talks } from '../config/talks';

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
    paddingBottom: theme.spacing(3),
    height: '100vh',
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  watchTalk: {
    paddingBottom: theme.spacing(5),
  },
}));

function Talk() {
  const classes = useStyles();
  const { slug } = useParams();

  const talkConfig = slug && talks.find(
    (talk) => talk.summaryPath.includes(slug),
  );

  const talkUrl = talkConfig && talkConfig?.talkUrl;
  const folder = talkConfig && talkConfig?.summaryPath.split('/')[1];
  const type = folder === 'talks' ? 'talk' : 'workshop';
  return (
    <Container maxWidth="sm" className={classes.blogsContainer}>
      {folder && <MarkdownRenderer folder={folder} />}
      {talkUrl && (
      <div className={classes.watchTalk}>
        <h2>
          Watch the full
          {' '}
          {type}
        </h2>
        If you found this interesting,
        why don&apos;t you check out the full
        {' '}
        {type}
        {' '}
        on GitNation. You can find the
        {' '}
        {type}
        {' '}
        <Link href={talkUrl} target="_blank" rel="noopener">
          here.
        </Link>
      </div>
      )}
    </Container>
  );
}

export default Talk;
