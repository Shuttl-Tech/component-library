import { createMuiTheme, Theme } from '@material-ui/core/styles';

const shuttlCyan = {
  300: '#00dae6',
  500: '#00adb7',
  700: '#009199',
};

export const ShuttlTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      light: shuttlCyan[300],
      main: shuttlCyan[500],
      dark: shuttlCyan[700],
      contrastText: '#ffffff',
    },
  },
});
