// material-ui
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Move createColor function above the theme creation
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

// loader style
const LoaderWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2001,
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2)
  }
}));

const theme = createTheme({
  palette: {
    primary: createColor('#0C1E21')
  }
});

// ==============================|| Loader ||============================== //
const Loader = () => (
  <ThemeProvider theme={theme}>
    <LoaderWrapper>
      <LinearProgress color="primary" />
    </LoaderWrapper>
  </ThemeProvider>
);

export default Loader;
