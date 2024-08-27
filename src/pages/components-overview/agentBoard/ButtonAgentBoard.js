import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function ButtonAgentBoard() {
  const navigate = useNavigate();

  const handleCreateAgent = () => {
    navigate('/create_agent');
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button onClick={handleCreateAgent}>+Agent</Button>
      </Box>
    </div>
  );
}
