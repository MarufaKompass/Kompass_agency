import MainCard from 'components/MainCard';
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import axiosInstance from 'utils/axios.config';
import AgentListItem from './AgentListItem';
import ButtonAgentBoard from './ButtonAgentBoard';
import { useAppContext } from 'AppContextProvider';
import AgentBoardLoader from 'loader/AgentBoardLoader';

// const AgentListItem = memo(({ agent }) => {
//   return <li>{agent.agent_name}</li>;
// });

export default function AgentBoard() {
  const [agents, setAgents] = useState([]);
  console.log(agents);
  const { loading, setLoading } = useAppContext();
  const [refresh, setRefresh] = useState(false);
  const [refreshStatus, setRefreshStatus] = useState(false);
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get('https://api.hellokompass.com/get-allagent')
      .then((res) => {
        setAgents(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [refresh, refreshStatus, setLoading]);

  const handleAgentUpdate = (updatedAgent) => {
    setAgents((prevAgents) => prevAgents.map((agent) => (agent.agent_name === updatedAgent.agent_name ? updatedAgent : agent)));
  };
  const handleAgentStatusUpdate = (updatedAgent) => {
    setAgents((prevAgents) => prevAgents.map((agent) => (agent.agent_status === updatedAgent.agent_status ? updatedAgent : agent)));
  };

  return (
    <Box>
      <MainCard>
        <ButtonAgentBoard></ButtonAgentBoard>
        {loading ? (
          <>
            <AgentBoardLoader></AgentBoardLoader>
            <AgentBoardLoader></AgentBoardLoader>
            <AgentBoardLoader></AgentBoardLoader>
          </>
        ) : (
          <Grid container spacing={2}>
            {agents.map((agent) => (
              <AgentListItem
                key={agent.agent_code}
                agent={agent}
                onUpdate={handleAgentUpdate}
                setRefresh={setRefresh}
                upStatusUpdate={handleAgentStatusUpdate}
                setRefreshStatus={setRefreshStatus}
              />
            ))}
          </Grid>
        )}
      </MainCard>
    </Box>
  );
}
