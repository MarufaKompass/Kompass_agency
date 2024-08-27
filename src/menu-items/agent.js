// assets
import appoints from '../components/svg/Appoint';
import event from '../components/svg/Event';
import schedule from '../components/svg/Schedule';
// icons
const icons = {
  appoints,
  event,
  schedule
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const agent = {
  id: 'agent',
  // title: 'My Kompass Connect',
  type: 'group',
  children: [
    {
      id: 'agent_board',
      title: 'Agent Board',
      type: 'item',
      url: '/agent_board',
      icon: icons.appoints
    }
  ]
};

export default agent;
