import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

import { createBrowserHistory } from 'history';

// import Image from '../assets/images/mac.jpg';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', 
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // opacity: 0.7,
    // backgroundColor: '#E5E7E9',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Login extends Component{

    signup(){
        const history = createBrowserHistory();
        history.push('/signup');
        history.go('/signup');
    }

    handleSubmit(){
        const history = createBrowserHistory();
        history.push('/sidenav');
        history.go('/sidenav');
    }

    render(){
        const { classes } = this.props;
        return (
            <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar>
                <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" autoComplete="email" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input name="password" type="password" id="password" autoComplete="current-password" />
                </FormControl>
                {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                /> */}
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.handleSubmit}
                >
                    Sign in
                </Button>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.signup}
                >
                    Register Here
                </Button>
                </form>
            </Paper>
            </main>
        );
    }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
