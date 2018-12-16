import React, {Component} from 'react';
import {Calendar} from 'primereact/calendar';

class CalendarP extends Component {

    constructor() {
        super();

        this.state = {
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            date6: null,
            date7: null,
            date8: null
        };
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Navigators Datepicker</h4>
                        <Calendar value={this.state.date4} onChange={(e) => this.setState({date4: e.value})} monthNavigator={true} yearNavigator={true} yearRange="2010:2030" showIcon={true}/>
                    </div>
                    <div className="col-md-6">
                        <h4>Multiple Selection Datepicker</h4>
                        <Calendar value={this.state.date7} onChange={(e) => this.setState({date7: e.value})} selectionMode="multiple" readonlyInput={true} showIcon={true}/>
                    </div>  
                    <div className="col-md-6">
                        <h4>Range Selection Datepicker</h4>
                        <Calendar value={this.state.date8} onChange={(e) => this.setState({date8: e.value})} selectionMode="range" readonlyInput={true} showIcon={true}/>
                    </div>
                    <div className="col-md-6">
                        <h4>Month/Year Datepicker</h4>
                        <Calendar value={this.state.date6} onChange={(e) => this.setState({date6: e.value})} view="month" dateFormat="mm/yy" yearNavigator={true} yearRange="2010:2030" showIcon={true}/>
                    </div>
                    <div className="col-md-6">
                        <h4>Time Datepicker</h4>
                        <Calendar value={this.state.date5} onChange={(e) => this.setState({date5: e.value})} showTime={true} readonlyInput={true} showSeconds={true} showIcon={true}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CalendarP;
