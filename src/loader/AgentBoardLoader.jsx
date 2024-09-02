import React from 'react';
import { Box, Grid, Skeleton } from '@mui/material';
export default function AgentBoardLoader() {
  return (
    <Grid container spacing={2} sx={{ mt: 4 }}>
      <Grid item xs={3}>
        <Box borderTop={20} borderColor="#f1f1f1" width="100%" sx={{ boxShadow: 1, p: 1 }}>
          <Box m={3} display="flex" gap="30px">
            <Box>
              <Box gap={2}>
                <Box
                  position="relative"
                  width={100}
                  height={100}
                  flexShrink={0}
                  sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' }, borderRadius: '50%' }}
                >
                  <Skeleton variant="rectangular" width="100%" height="100%" sx={{ borderRadius: '50%' }} />
                </Box>
              </Box>
            </Box>

            <Box>
              <Skeleton width="100px" height={35} sx={{ mb: 2 }} />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Skeleton width="80px" height={20} />
                <Skeleton width="120px" height={20} />
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Skeleton width="80px" height={20} />
                <Skeleton width="120px" height={20} />
              </Box>
              <Box sx={{ pt: '20px' }}>
                <Skeleton width="20px" height={20} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box borderTop={20} borderColor="#f1f1f1" width="100%" sx={{ boxShadow: 1, p: 1 }}>
          <Box m={3} display="flex" gap="30px">
            <Box>
              <Box gap={2}>
                <Box
                  position="relative"
                  width={100}
                  height={100}
                  flexShrink={0}
                  sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' }, borderRadius: '50%' }}
                >
                  <Skeleton variant="rectangular" width="100%" height="100%" sx={{ borderRadius: '50%' }} />
                </Box>
              </Box>
            </Box>

            <Box>
              <Skeleton width="100px" height={35} sx={{ mb: 2 }} />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Skeleton width="80px" height={20} />
                <Skeleton width="120px" height={20} />
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Skeleton width="80px" height={20} />
                <Skeleton width="120px" height={20} />
              </Box>
              <Box sx={{ pt: '20px' }}>
                <Skeleton width="20px" height={20} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box borderTop={20} borderColor="#f1f1f1" width="100%" sx={{ boxShadow: 1, p: 1 }}>
          <Box m={3} display="flex" gap="30px">
            <Box>
              <Box gap={2}>
                <Box
                  position="relative"
                  width={100}
                  height={100}
                  flexShrink={0}
                  sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' }, borderRadius: '50%' }}
                >
                  <Skeleton variant="rectangular" width="100%" height="100%" sx={{ borderRadius: '50%' }} />
                </Box>
              </Box>
            </Box>

            <Box>
              <Skeleton width="100px" height={35} sx={{ mb: 2 }} />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Skeleton width="80px" height={20} />
                <Skeleton width="120px" height={20} />
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Skeleton width="80px" height={20} />
                <Skeleton width="120px" height={20} />
              </Box>
              <Box sx={{ pt: '20px' }}>
                <Skeleton width="20px" height={20} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box borderTop={20} borderColor="#f1f1f1" width="100%" sx={{ boxShadow: 1, p: 1 }}>
          <Box m={3} display="flex" gap="30px">
            <Box>
              <Box gap={2}>
                <Box
                  position="relative"
                  width={100}
                  height={100}
                  flexShrink={0}
                  sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' }, borderRadius: '50%' }}
                >
                  <Skeleton variant="rectangular" width="100%" height="100%" sx={{ borderRadius: '50%' }} />
                </Box>
              </Box>
            </Box>

            <Box>
              <Skeleton width="100px" height={35} sx={{ mb: 2 }} />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Skeleton width="80px" height={20} />
                <Skeleton width="120px" height={20} />
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Skeleton width="80px" height={20} />
                <Skeleton width="120px" height={20} />
              </Box>
              <Box sx={{ pt: '20px' }}>
                <Skeleton width="20px" height={20} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
