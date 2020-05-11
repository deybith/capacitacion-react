import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple, lime } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        margin: theme.spacing(1),
        color: 'red',
        '& p': {
            color: purble[500],
            '& span': {
                color: lime[900]
            }
        }
    },
  },
  button: {
      backgroundColor: 'red'
  },
  buttonSuccess: {
      border: "none"
  }
}));

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

export default function ContainedButtons() {
  const classes = useStyles();

  console.log(classes);

  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
        
        
        
        
        <ThemeProvider theme={theme}>
              <Button variant="contained" color="primary" className={classes.buttonSuccess}>
            <p>
                <span>
                    Secondary
                </span>
            </p>
        </Button>
        </ThemeProvider>
    </div>
  );
}
