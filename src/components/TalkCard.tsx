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
  Button,
} from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import type { Talk } from '../config/talks';
import stringAvatar from '../utils/stringAvatar';
import { conferences } from '../config/conferences';

interface Props {
  talk: Talk
}

function TalkCard({ talk }: Props) {
  const imageUrl = conferences.find((conference) => conference.name === talk.conference)?.imgUrl;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea>
          <MuiLink component={RouterLink} to={talk.summaryPath} underline="hover">
            <CardMedia
              sx={{
                height: 240,
              }}
              image={imageUrl}
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
            flexDirection: 'column',
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
          {talk.talkUrl
          && (
          <Box sx={{ display: 'flex', justifyContent: 'center', margin: '12px' }}>
            <Button variant="outlined" startIcon={<VideocamIcon />} href={talk.talkUrl} target="_blank" rel="noopener">
              Watch talk here
            </Button>
          </Box>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default TalkCard;
