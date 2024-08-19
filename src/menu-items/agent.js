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
      id: 'add_agent',
      title: 'Add Agent',
      type: 'item',
      url: '/add_agent',
      icon: icons.appoints
    }
  ]
};

export default agent;
