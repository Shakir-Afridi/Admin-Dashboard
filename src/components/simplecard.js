import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// components 
import SampleTable from '../components/table';
import DashBoard from '../components/dashboard';

const styles = theme => ({
  card: {
    // backgroundColor: '#8B9292',
    minWidth: 420,
    // overflow: 'auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
});


class SimpleCard extends Component{

    renderComponent (compName) {
        console.log('compName', compName)
        
    }

    render(){
        const { classes, renderComp } = this.props;
        let compToRender;
        if (renderComp === 'Table') {
            compToRender = <SampleTable />
        } else if (renderComp === 'Dashboard'){
            compToRender = <DashBoard />
        } else if (renderComp === 'Inbox'){
            compToRender = <div>Inbox</div>
        } else{
            compToRender = <div>Mail</div>
        }
        return (
            // <Card className={classes.card}>
                // <CardContent>
                <div>
                    {compToRender}
                </div>
                // </CardContent>
            // </Card>
        );
    }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);