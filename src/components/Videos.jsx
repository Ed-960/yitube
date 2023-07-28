import { Box, Stack } from '@mui/system';
import React from 'react';
import ChannelCard from './ChannelCard';
import Loader from './Loader';
import VideoCard from './VideoCard';

const Videos = ({ videos, direction }) => {
  if (!videos) return <Loader />;
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {videos?.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
