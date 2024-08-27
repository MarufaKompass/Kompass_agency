import React, { memo } from 'react';

const AgentListItem = memo(({ agent }) => {
  return (
    <div>
      <li>{agent.agent_name}</li>
    </div>
  );
});

export default AgentListItem;