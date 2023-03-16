import {
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Link as MuiLink,
} from '@mui/material';

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import type { Talk } from '../config/talks';
import stringAvatar from '../utils/stringAvatar';

interface Props {
  talk: Talk
}

function TalkCard({ talk }: Props) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea>
          <MuiLink component={RouterLink} to={talk.summaryPath} underline="hover">
            <CardMedia
              sx={{
                height: 240,
              }}
              image="https://techleadconf.com/img/logo.svg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {talk.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A summary of the talk from notes made at Tech Lead Conf
              </Typography>
            </CardContent>
          </MuiLink>
        </CardActionArea>
        <CardActions
          sx={{
            display: 'flex',
            margin: '0 10px',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Avatar {...stringAvatar(talk.originAuthor)} />
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                {talk.originAuthor}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" component="p">
                {talk.conference}
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default TalkCard;
