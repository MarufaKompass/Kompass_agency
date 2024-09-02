import React, { memo, useState } from 'react';
import { Box, Avatar, Typography, Grid } from '@mui/material';
import Edit from 'components/svg/Edit';
import UpdateAgent from './UpdateAgent';
import ActiveIcon from 'components/svg/ActiveIcon';
import StatusChangedModal from './StatusChangedModal';
const AgentListItem = memo(({ agent }) => {
  const { agent_status, agent_id, agent_name, agent_code, agent_phone } = agent;

  const [open, setOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  console.log(statusOpen);
  const [selectedAgentId, setSelectedAgentId] = useState('');

  const handleClose = () => setOpen(false);

  const handleUpdate = () => {
    setSelectedAgentId(agent_id);
    setOpen(true);
  };

  const handleStatusClose = () => setStatusOpen(false);

  const handleStatusUpdate = () => {
    setSelectedAgentId(agent_id);
    setStatusOpen(true);
  };
  return (
    <Grid item xs={3}>
      <Box>
        <Box>
          <Box sx={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
            <Box>
              <Typography sx={{ backgroundColor: '#0C1E21', color: '#fff', fontWeight: 'semibold', px: '10px', py: '0px' }}>
                {agent_status}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 4, p: 3 }}>
              <Box>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 80, height: 80 }} />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                  <Typography sx={{ color: '#181E27', fontSize: '18px', fontWeight: 'bold', fontFamily: 'roboto', pb: '10px' }}>
                    {agent_name}
                  </Typography>
                  <Typography sx={{ color: '#181E27', fontSize: '14px', fontWeight: 'medium', fontFamily: 'roboto', pb: '2px' }}>
                    Agent Phone : {agent_phone}
                  </Typography>
                  <Typography sx={{ color: '#181E27', fontSize: '14px', fontWeight: 'medium', fontFamily: 'roboto', pb: 2 }}>
                    Agent Code : {agent_code}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box onClick={handleUpdate}>
                      <Edit></Edit>
                    </Box>
                    <Box onClick={handleStatusUpdate}>
                      <ActiveIcon></ActiveIcon>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <UpdateAgent
        open={open}
        handleClose={handleClose}
        selectedAgentId={selectedAgentId}
        agent_name={agent_name}
        agent_code={agent_code}
      ></UpdateAgent>
      <StatusChangedModal
        statusOpen={statusOpen}
        handleStatusClose={handleStatusClose}
        selectedAgentId={selectedAgentId}
        agent_code={agent_code}
      ></StatusChangedModal>
    </Grid>
  );
});

export default AgentListItem;
