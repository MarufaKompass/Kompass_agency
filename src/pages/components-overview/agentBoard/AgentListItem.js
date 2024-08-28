import React, { memo } from 'react';
import { Box, Avatar, Typography, Grid } from '@mui/material';
const AgentListItem = memo(({ agent }) => {
  console.log(agent);

  const { agent_status } = agent;
  return (
    <Grid item xs={3}>
      <Box>
        <Box>
          <Box sx={{ border: '1px solid #000' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 80, height: 80 }} />
              </Box>
              <Box>
                <Typography sx={{ backgroundColor: '#008000', px: '10px', py: '0px' }}>{agent_status}</Typography>
              </Box>
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
});

export default AgentListItem;
