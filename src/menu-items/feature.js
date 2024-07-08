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

const feature = {
  id: 'appoint',
  // title: 'My Kompass Connect',
  type: 'group',
  children: [
    {
      id: 'add_agent',
      title: 'Add Agent',
      type: 'item',
      url: '/appointment',
      icon: icons.appoints
    },
    {
      id: 'commission',
      title: 'Commission',
      type: 'item',
      url: '/schedule',
      icon: icons.schedule
    }
  ]
};

export default feature;
