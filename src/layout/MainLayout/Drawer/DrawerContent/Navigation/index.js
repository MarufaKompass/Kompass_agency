// material-ui
import { Box, Typography } from '@mui/material';

// project import
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
import SideBarLoader from 'loader/SideBarLoader';
import { useEffect, useState } from 'react';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const navGroups = menuItem.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return <Typography key={item.id}></Typography>;
    }
  });

  return (
    <>
      <Box>
        {loading ? (
          <Box sx={{ p: 2 }}>
            <SideBarLoader />
          </Box>
        ) : (
          <Box>{navGroups}</Box>
        )}
      </Box>
    </>
  );
};

export default Navigation;

{
  /* <Box sx={{ pt: 2 }}>{navGroups}</Box>; */
}
