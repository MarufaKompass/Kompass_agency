import leave from '../components/svg/Leave';


// icons

const icons = {
  leave,

};
// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const agency = {
  id: 'agency',
  // title: 'kompass Company',
  type: 'group',
  children: [
    {
      id: 'agent',
      title: 'Agent',
      type: 'collapse',
      icon: icons.leave,
      children: [
        {
          id: 'active',
          title: 'Active',
          type: 'item',
          url: '/active',
          breadcrumbs: false
        },
        {
          id: 'deActive',
          title: 'Deactive',
          type: 'item',
          url: '/deactive',

          breadcrumbs: false
        }
      ]
    }
  ]
};

export default agency;
