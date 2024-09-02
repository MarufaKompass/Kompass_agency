import React from 'react';
import { Box, Modal, Typography, Grid, FormControl, TextField, Button, MenuItem, Select } from '@mui/material';
import { useForm } from 'react-hook-form';

// import axiosInstance from 'utils/axios.config';
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

export default function StatusChangedModal({ statusOpen, handleStatusClose, selectedAgentId, agent_code }) {
  console.log(selectedAgentId);
  const {
    register,
    handleSubmit
    // reset
    // formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data: ', data);
    // axiosInstance.post('https://api.hellokompass.com/quickchange-myagent', data).then((res) => {
    //   if (res.data.code === 200) {
    //     toast.success(res.data.message);
    //     reset();
    //     navigate('/agent_board');
    //   } else if (res.data.code === 400) {
    //     toast.failed(res.data.message);
    //   } else {
    //     <></>;
    //   }
    // });
  };

  return (
    <Modal open={statusOpen} onClose={handleStatusClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
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
                          {...register('agnt_code', { required: true })}
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
                    Status Changed *
                  </Typography>
                </Grid>

                <Grid items={true} xs={12} sm={12} md={12} lg={12}>
                  <FormControl sx={{ width:'100%',pt:'10px' }} size="medium">
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Age"
                      {...register('agent_status', { required: true })}
                      name="agent_status"
                    >
                     
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
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
