import React from 'react';
import { Box, Grid, Typography, Skeleton } from '@mui/material';
export default function AppointmentLoader() {
  return (
    <Grid container spacing={2} sx={{mt:4}}>
      <Grid item xs={6}>



<Box borderBottom={6} borderColor="#f1f1f1">
<Box  mb={4}>
{/*    
          <Box
            position="relative"
            width={168}
            height={94}
            flexShrink={0}
            sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' } }}
          >
            <Skeleton variant="rectangular" width="100%" height="100%" />
          </Box> */}
        
          <Box >
            <Box display="flex" gap={2}>
            <Typography variant="body2">
              <Skeleton width="130px" height={40} />
            </Typography>
            <Typography variant="body2">
              <Skeleton width="80px" height={40} />
            </Typography>
            <Typography variant="body2">
              <Skeleton width="70px" height={40} />
            </Typography>
            </Box>
         
         <Box display="flex" gap={2} justifyContent="space-between">
   {/* <Typography variant="body2" mt={2}> */}
            <Skeleton width="25%" height={30} />
            {/* </Typography> */}
               {/* <Typography variant="body2" mt={2}> */}
               <Skeleton width="3%" height={35} />
            {/* </Typography> */}
         </Box>
         


        <Box display="flex" gap={2}>
        <Typography variant="body2">   
              <Skeleton width="20px" height={20} />
            </Typography>
            <Typography variant="body2">   
              <Skeleton width="60px" height={20} />
            </Typography>
        </Box>
          
        <Box display="flex" gap={2}>
        <Typography variant="body2">   
              <Skeleton width="20px" height={20} />
            </Typography>
            <Typography variant="body2">   
              <Skeleton width="60px" height={20} />
            </Typography>
        </Box>
          
          </Box>
      <Box>
      <Typography variant="body2">
              <Skeleton width="30%" height={20} />
            </Typography>
      </Box>
        </Box>

</Box>



      </Grid>
      <Grid item xs={6}>

      <Box borderBottom={6} borderColor="#f1f1f1">
<Box  mb={4}>
{/*    
          <Box
            position="relative"
            width={168}
            height={94}
            flexShrink={0}
            sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' } }}
          >
            <Skeleton variant="rectangular" width="100%" height="100%" />
          </Box> */}
        
          <Box >
            <Box display="flex" gap={2}>
            <Typography variant="body2">
              <Skeleton width="130px" height={40} />
            </Typography>
            <Typography variant="body2">
              <Skeleton width="80px" height={40} />
            </Typography>
            <Typography variant="body2">
              <Skeleton width="70px" height={40} />
            </Typography>
            </Box>
         
         <Box display="flex" gap={2} justifyContent="space-between">
   {/* <Typography variant="body2" mt={2}> */}
            <Skeleton width="25%" height={30} />
            {/* </Typography> */}
               {/* <Typography variant="body2" mt={2}> */}
               <Skeleton width="3%" height={35} />
            {/* </Typography> */}
         </Box>
         


        <Box display="flex" gap={2}>
        <Typography variant="body2">   
              <Skeleton width="20px" height={20} />
            </Typography>
            <Typography variant="body2">   
              <Skeleton width="60px" height={20} />
            </Typography>
        </Box>
          
        <Box display="flex" gap={2}>
        <Typography variant="body2">   
              <Skeleton width="20px" height={20} />
            </Typography>
            <Typography variant="body2">   
              <Skeleton width="60px" height={20} />
            </Typography>
        </Box>
          
          </Box>
      <Box>
      <Typography variant="body2">
              <Skeleton width="30%" height={20} />
            </Typography>
      </Box>
        </Box>

</Box>
      </Grid>
   
    </Grid>
  );
}
