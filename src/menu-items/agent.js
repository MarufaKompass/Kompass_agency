// assets
import agent from '../components/svg/Agent';

// icons
const icons = {
  agent
};

// ==============================|| MENU ITEMS - agent ||============================== //

const agents = {
  id: 'agent',
  type: 'group',
  children: [
    {
      id: 'agent_board',
      title: 'Agent Board',
      type: 'item',
      url: '/agent_board',
      icon: icons.agent
    }
  ]
};

export default agents;
