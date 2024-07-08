import leave from '../components/svg/Leave';
import earnWage from '../components/svg/EarnWage';
import loan from '../components/svg/Loan';
import iou from '../components/svg/Iou';
import salary from '../components/svg/Salary';
import providentFund from '../components/svg/Provident';
import attendance from '../components/svg/Attendance';

// icons

const icons = {
  leave,
  earnWage,
  loan,
  iou,
  salary,
  providentFund,
  attendance
};
// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const kompassCompany = {
  id: 'company',
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

export default kompassCompany;
