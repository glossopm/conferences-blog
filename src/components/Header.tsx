import {
  AppBar, Toolbar, Typography, Link as MuiLink, styled,
} from '@mui/material';

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const LinkItem = styled(MuiLink)({
  marginRight: '20px',
  textDecoration: 'none',
  color: 'white',
}) as typeof MuiLink;

function Home() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'lightseagreen!important',
        color: 'white',
        display: 'flex',
      }}
    >
      <Toolbar>
        <Typography variant="h6">
          <LinkItem component={RouterLink} to="/">
            Home
          </LinkItem>
          <LinkItem component={RouterLink} to="/talks">
            Talk Summaries
          </LinkItem>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Home;
