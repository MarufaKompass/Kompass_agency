import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ButtonAgentBoard() {
  const navigate = useNavigate();

  const handleCreateAgent = () => {
    navigate('/create_agent');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
      <Box sx={{ display: 'flex', justifyContent: 'end', mb: 3 }}>
        <Button onClick={handleCreateAgent}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '150px',
              color: '',
              transition: 'all 0.3s ease',
              background: '#0C1E21'
            }}
          >
            <Typography
              sx={{
                color: '#fff',
               
                fontSize: '14px',
                fontWeight: 'bold',
                fontFamily: 'roboto',
                py: 1
              }}
            >
              {' '}
              + Agent
            </Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
