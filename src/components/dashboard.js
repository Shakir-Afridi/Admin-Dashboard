import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SampleTable from './table';

const styles = theme => ({
  root: {
    flexGrow: 1,
    // overflow: 'scroll',
    // height: window.innerHeight,
  },
  root1: {
      flexGrow: 1
  },
  card1:{
    // backgroundColor: '#8B9292',
    minWidth: 420,
    overflow: 'auto',
  },
  card: {
    color: '#fff',
    backgroundColor: '#0E8E84',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    // height: '120px',
    // color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 140,
    // paddingTop: '56.25%', // 16:9
  },
});

class Dashboard extends Component{
    render(){
    const { classes } = this.props;

    return (
        <div>
        <Card className={classes.card1}>
        <CardContent>
        <div className={classes.root}>
        <Grid container spacing={24}>
            <Grid item xs={4}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.card}>xs=4</Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.card}>xs=4</Paper>
            </Grid>
        </Grid>
        </div>
         </CardContent>
         </Card>
         <div style={{marginBottom: '10px'}}></div>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <SampleTable />
                </Grid>
            </Grid>
         </div>
    );
    }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);