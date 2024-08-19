// material-ui
import { Button, Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

import { useNavigate } from 'react-router-dom';

// assets
import MeetingTable from './MeetingTable';
import DashboardNotificationTable from './DashboardNotificationTable';
import DashboardNumbering from 'components/cards/statistics/DashboardNumbering';
import DashboardAppoint from 'components/dashboardSvg/DashboardAppoint';
import DashBoardEvent from 'components/dashboardSvg/DashBoardEvent';
import DashBoardEarnWage from 'components/dashboardSvg/DashBoardEarnWage';
import DashboardIou from 'components/dashboardSvg/DashboardIou';
import DashboardLoan from 'components/dashboardSvg/DashboardLoan';
import DashboardLeave from 'components/dashboardSvg/DashboardLeave';
import { useAppContext } from 'AppContextProvider';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/notification');
  };
  const { profile } = useAppContext();
  const { module_list = {}, greeting_msg } = profile;

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
        <Typography variant="p">{greeting_msg}</Typography>
        {/* <Typography variant="p">{profile.Dashboard}</Typography> */}
      </Grid>
      {module_list.payroll === true ? (
        <>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <DashboardNumbering
              title="Total Appointment"
              count="20"
              icons={<DashboardAppoint></DashboardAppoint>}
              color="rgba(18, 169, 178, 0.7)"
              borderColor="#12a9b2"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <DashboardNumbering title="Total Event" count="04" icons={<DashBoardEvent></DashBoardEvent>} color="rgba(71, 110, 244, 0.7)" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <DashboardNumbering title="Total Leave" count="10" icons={<DashboardLeave></DashboardLeave>} color="rgba(0, 123, 255, 0.7)" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <DashboardNumbering
              title="Total Earn Wage"
              count="03"
              icons={<DashBoardEarnWage></DashBoardEarnWage>}
              color="rgba(142, 68, 173, 0.5)"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <DashboardNumbering title="Total IOU" count="50" icons={<DashboardIou></DashboardIou>} color="rgba(75, 73, 172, 0.7)" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <DashboardNumbering title="Total Loan" count="02" icons={<DashboardLoan></DashboardLoan>} color="rgba(55, 210, 69, 0.7)" />
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <DashboardNumbering
              title="Total Appointment"
              count="20"
              icons={<DashboardAppoint></DashboardAppoint>}
              color="rgba(18, 169, 178, 0.7)"
              borderColor="#12a9b2"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <DashboardNumbering title="Total Event" count="04" icons={<DashBoardEvent></DashBoardEvent>} color="rgba(71, 110, 244, 0.7)" />
          </Grid>
        </>
      )}

      <Grid item xs={12} md={7} lg={8} spacing={3}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Upcoming Activity</Typography>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <MeetingTable />
        </MainCard>
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Notifications</Typography>
          </Grid>
          <Grid item sx={{ mr: 2 }}>
            <Button variant="outlined" size="small" onClick={handleViewAll} sx={{ color: '#12A9B2', '&:hover': { color: '#12A9B2' } }}>
              View All
            </Button>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <DashboardNotificationTable />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
