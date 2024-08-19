// material-ui
import { Box ,useMediaQuery } from '@mui/material';


// project import
//import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      {matchesXs || <Box sx={{ width: '100%', ml: 1, fontSize: '12px' }}> Bangladesh Standard Time : UTC+06:00</Box>}
      <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
