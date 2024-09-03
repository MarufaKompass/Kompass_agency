import React from 'react';
import { Box, Modal, Typography, Grid, FormControl, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppContext } from 'AppContextProvider';
import axiosInstance from 'utils/axios.config';
import { toast } from 'react-toastify';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  border: '0px solid #fff',
  boxShadow: 24,
  borderRadius: '0px',
  p: 4
};

export default function UpdateAgent({ handleClose, open, agent_name, agent_code,onUpdate }) {
  const {
    register,
    handleSubmit,
    reset
    // formState: { errors }
  } = useForm();
  const { profile } = useAppContext();

  const onSubmit = (data) => {
    console.log('Form Data: ', data);
    axiosInstance.post('https://api.hellokompass.com/modify-myagent', data).then((res) => {
      if (res.data.code === 200) {
        toast.success(res.data.message);
        const updatedAgent = { ...data, agent_name };
        onUpdate(updatedAgent);
        reset();
        handleClose();
      } else if (res.data.code === 400) {
        toast.failed(res.data.message);
      } else {
        <></>;
      }
    });
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Box>
              <Grid container>
                {agent_code && (
                  <Grid items={true} xs={12} sm={12} md={12} lg={12}>
                    <FormControl fullWidth>
                      <Box sx={{ mt: 1, mb: 3 }}>
                        <TextField
                          {...register('agent_code', { required: true })}
                          fullWidth
                          readOnly
                          name="agnt_code"
                          id="outlined"
                          size="large"
                          value={agent_code}
                        />
                      </Box>
                    </FormControl>
                  </Grid>
                )}
              </Grid>
              <Grid container>
                <Grid items={true} xs={0} sm={0} md={0} lg={0} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{ color: '#181E27', fontSize: '14px', fontWeight: 'bold', fontFamily: 'roboto' }}
                  >
                    Agent Name*
                  </Typography>
                </Grid>
                {agent_name && (
                  <Grid items={true} xs={12} sm={12} md={12} lg={12}>
                    <FormControl fullWidth>
                      <Box sx={{ mt: 1, mb: 3 }}>
                        <TextField
                          {...register('agnt_name', { required: true })}
                          fullWidth
                          readOnly
                          name="agnt_name"
                          id="outlined"
                          size="large"
                          // placeholder="Enter Agent Name"
                          defaultValue={agent_name}
                        />
                      </Box>
                    </FormControl>
                  </Grid>
                )}
              </Grid>

              <Grid container>
                <Grid items={true} xs={0} sm={0} md={0} lg={0} sx={{ display: 'flex', alignItems: 'center' }}></Grid>
                <Grid items={true} xs={12} sm={12} md={12} lg={12}>
                  {profile.agcode && (
                    <FormControl fullWidth>
                      <Box sx={{ mt: 1, mb: 3 }}>
                        <TextField
                          {...register('agency', { required: true })}
                          fullWidth
                          readOnly
                          name="agency"
                          id="outlined"
                          size="large"
                          value={profile.agcode}
                        />
                      </Box>
                    </FormControl>
                  )}
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'right', mt: 2 }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: ['100%'],
                  fontSize: '17px',
                  fontWeight: 'bold',
                  fontFamily: 'roboto',
                  backgroundColor: '#0C1E21',
                  '&:hover': {
                    backgroundColor: '#1b3438'
                  }
                }}
              >
                Update
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}
