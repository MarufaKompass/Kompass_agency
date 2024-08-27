import MainCard from 'components/MainCard';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import axiosInstance from 'utils/axios.config';
import AgentListItem from './AgentListItem';
import ButtonAgentBoard from './ButtonAgentBoard';

// const AgentListItem = memo(({ agent }) => {
//   return <li>{agent.agent_name}</li>;
// });

export default function AgentBoard() {
  const [agents, setAgents] = useState([]);
  console.log(agents);

  useEffect(() => {
    axiosInstance
      .get('https://api.hellokompass.com/get-allagent')
      .then((res) => {
        setAgents(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   let isMounted = true; // Flag to track if the component is mounted

  //   axiosInstance
  //     .get('https://api.hellokompass.com/get-allagent')
  //     .then((res) => {
  //       if (isMounted) {
  //         // Check if the data has changed before setting state
  //         setAgents((prevAgents) => {
  //           const newAgents = res.data.data;
  //           if (JSON.stringify(prevAgents) !== JSON.stringify(newAgents)) {
  //             return newAgents;
  //           }
  //           return prevAgents;
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching agents:', error);
  //     });

  //   return () => {
  //     isMounted = false; // Cleanup to avoid updating state if the component unmounts
  //   };
  // }, []);

  return (
    <Box>
      <MainCard>
      <ButtonAgentBoard></ButtonAgentBoard>
        <Box>
          {agents.map((agent) => (
            <AgentListItem key={agent.agent_code} agent={agent} />
          ))}
        </Box>
      </MainCard>
    </Box>
  );
}
