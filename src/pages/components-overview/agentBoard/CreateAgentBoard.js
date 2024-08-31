import MainCard from 'components/MainCard';
import React from 'react';
import { Box, Button, Grid, Typography, Divider, FormControl, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppContext } from 'AppContextProvider';
import { toast } from 'react-toastify';
import agentRegistration from '../../../assets/images/image/agentRegistration.png';
import axiosInstance from 'utils/axios.config';
import { useNavigate } from 'react-router-dom';
export default function CreateAgentBoard() {
  const navigate = useNavigate();
  const { profile , passwordView } = useAppContext();

  const {
    register,
    handleSubmit,
    reset
    // formState: { errors }
  } = useForm();
  //   {
  //     resolver: yupResolver(loanPage)
  //   }

  const onSubmit = (data) => {
    console.log(data);
    axiosInstance.post('https://api.hellokompass.com/create-agent', data).then((res) => {
      if (res.data.code === 200) {
        toast.success(res.data.message);
        reset();
        navigate('/agent_board');
      } else if (res.data.code === 400) {
        toast.failed(res.data.message);
      } else {
        <></>;
      }
    });
  };

  return (
    <Box>
      <MainCard>
        <Box id="modal-modal-title" sx={{ width: '100%' }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ color: '#181E27', fontSize: '25px', fontWeight: 'bold', fontFamily: 'roboto', ml: 3 }}
          >
            Agent Application Form
          </Typography>
        </Box>
        <Divider variant="middle" sx={{ my: 3 }} />
        <Grid container spacing={3} sx={{ display: 'flex', alignItems: 'center', height: '100%'}}>
          <Grid item xs={12} sm={12} md={6}>
            <Box sx={{ px: { xs: 0, md: 6, lg: 4, xl: 6 } }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                  <Box>
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
                              placeholder="Enter Agent Name"
                            />
                          </Box>
                        </FormControl>
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid items={true} xs={0} sm={0} md={0} lg={0} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                          variant="h6"
                          component="h4"
                          sx={{ color: '#181E27', fontSize: '14px', fontWeight: 'bold', fontFamily: 'roboto' }}
                        >
                          Agent Phone*
                        </Typography>
                      </Grid>
                      <Grid items={true} xs={12} sm={12} md={12} lg={12}>
                        <FormControl fullWidth>
                          <Box sx={{ mt: 1, mb: 3 }}>
                            <TextField
                              {...register('agnt_phone', { required: true })}
                              fullWidth
                              readOnly
                              name="agnt_phone"
                              id="outlined"
                              size="large"
                              placeholder="Enter Agent Phone Number"
                            />
                          </Box>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box>
                    <Grid container>
                      <Grid items={true} xs={0} sm={0} md={0} lg={0} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                          variant="h6"
                          component="h4"
                          sx={{ color: '#181E27', fontSize: '14px', fontWeight: 'bold', fontFamily: 'roboto' }}
                        >
                          Agent Password*
                        </Typography>
                      </Grid>
                      <Grid items={true} xs={12} sm={12} md={12} lg={12}>
                        <FormControl fullWidth>
                          <Box sx={{ mt: 1, mb: 3 }}>
                            <TextField
                              {...register('agnt_pasword', { required: true })}
                              fullWidth
                              readOnly
                              name="agnt_pasword"
                              id="outlined"
                              size="large"
                              type="password"
                              placeholder="Enter Password"
                              onChange={passwordView}
                            />
                          </Box>
                        </FormControl>
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid items={true} xs={0} sm={0} md={0} lg={0} sx={{ display: 'flex', alignItems: 'center' }}></Grid>
                      <Grid items={true} xs={12} sm={12} md={12} lg={12} hidden>
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
                      Registration
                    </Button>
                  </Box>
                </Box>
              </form>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <img src={agentRegistration} alt="agentRegistration" height="100%" width="100%" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </MainCard>
    </Box>
  );
}
