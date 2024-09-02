import React from 'react';
import { Box, Skeleton } from '@mui/material';

export default function SideBarLoader() {
  return (
    <Box>
      <Box>
        <Skeleton width="100px" height={25} />
        <Box sx={{ pl: '20px', pt: '15px', display: 'flex', gap: 1 }}>
          <Skeleton width="20px" height={25} />
          <Skeleton width="100px" height={25} />
        </Box>
        <Skeleton width="100%" height={2} sx={{ mt: '20px' }} />
      </Box>

      <Box sx={{ pt: 3 }}>
        <Skeleton width="100px" height={25} />

        <Box sx={{ pl: '20px', pt: '15px', display: 'flex', gap: 1 }}>
          <Skeleton width="20px" height={25} />
          <Skeleton width="110px" height={25} />
        </Box>

        <Box sx={{ pl: '20px', pt: '15px', display: 'flex', gap: 1 }}>
          <Skeleton width="20px" height={25} />
          <Skeleton width="90px" height={25} />
        </Box>

        <Box sx={{ pl: '20px', pt: '15px', display: 'flex', gap: 1 }}>
          <Skeleton width="20px" height={25} />
          <Skeleton width="95px" height={25} />
        </Box>
        <Skeleton width="100%" height={2} sx={{ mt: '20px' }} />
      </Box>

      <Box sx={{ pt: 3 }}>
        <Skeleton width="100px" height={25} />
        <Box sx={{ pl: '20px', pt: '15px', display: 'flex', gap: 1 }}>
          <Skeleton width="20px" height={25} />
          <Skeleton width="130px" height={25} />
        </Box>
        <Skeleton width="100%" height={2} sx={{ mt: '20px' }} />
      </Box>

      <Box sx={{ pt: 3 }}>
        <Skeleton width="100px" height={25} />
        <Box sx={{ pl: '20px', pt: '15px', display: 'flex', gap: 1 }}>
          <Skeleton width="20px" height={25} />
          <Skeleton width="80px" height={25} />
        </Box>
        <Skeleton width="100%" height={2} sx={{ mt: '20px' }} />
      </Box>

      <Box sx={{ pt: 3 }}>
        <Skeleton width="100px" height={25} />

        <Box sx={{ pl: '20px', pt: '30px', display: 'flex', gap: 1 }}>
          <Skeleton width="20px" height={25} />
          <Skeleton width="80px" height={25} />
        </Box>

        <Box sx={{ pl: '20px', pt: '30px', display: 'flex', gap: 1 }}>
          <Skeleton width="20px" height={25} />
          <Skeleton width="100px" height={25} />
        </Box>

        <Box sx={{ pl: '20px', pt: '30px', display: 'flex', gap: 1 }}>
          <Skeleton width="20px" height={25} />
          <Skeleton width="60px" height={25} />
        </Box>
        <Box sx={{ pl: '20px', pt: '30px', display: 'flex', gap: 1 }}>
          <Skeleton width="20px" height={25} />
          <Skeleton width="70px" height={25} />
        </Box>
        <Box sx={{ pl: '20px', pt: '30px', display: 'flex', gap: 1 }}>
          <Skeleton width="20px" height={25} />
          <Skeleton width="75px" height={25} />
        </Box>
        <Box sx={{ pl: '20px', pt: '30px', display: 'flex', gap: 1 }}>
          <Skeleton width="20px" height={25} />
          <Skeleton width="80px" height={25} />
        </Box>
        <Skeleton width="100%" height={2} sx={{ mt: '20px' }} />
      </Box>
    </Box>
  );
}
