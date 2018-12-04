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

class Dashboard extends Component{
    render(){
        return (
            <div className="myContainer">
                <div className="row">
                    <div className="col-md-3">
                        <div className="panel panel-default" style={{textAlign: 'center'}}>
                            <div className="panel-body">
                                Card#1 some thing
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-default" style={{textAlign: 'center'}}>
                            <div className="panel-body">
                                Card#2 some thing
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-default" style={{textAlign: 'center'}}>
                            <div className="panel-body">
                                Card#3 some thing
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-default" style={{textAlign: 'center'}}>
                            <div className="panel-body">
                                Card#4 some thing
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default Dashboard;