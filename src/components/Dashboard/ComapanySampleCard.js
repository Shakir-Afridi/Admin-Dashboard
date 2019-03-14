import React, {Component} from 'react';

class SampleCard extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    const {logo, companyName, about, team, budget, success} = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-12" style={{textAlign: 'center'}}>
            <h2>{companyName}</h2>
          </div>
        </div>
        <div className="row" style={{marginTop: '30px', textAlign: 'center'}}>
          <div className="col-md-4" />
          <div className="col-md-4">
            <img
              src={logo}
              alt="logo"
              style={{marginLeft: '-20px', width: '100px', height: '100px'}}
            />
          </div>
          <div className="col-md-4" />
        </div>
        <div
          className="row"
          style={{marginTop: '30px', backgroundColor: '#eee'}}
        >
          <div className="col-md-12" style={{textAlign: 'center'}}>
            <h4>{about}</h4>
          </div>
        </div>
        <div className="row" style={{marginTop: '30px'}}>
          <div className="col-md-4" style={{textAlign: 'center'}}>
            <label>{team}</label><br />
            <small style={{opacity: '0.5'}}>Teams</small>
          </div>
          <div className="col-md-4" style={{textAlign: 'center'}}>
            <label>{budget}</label><br />
            <small style={{opacity: '0.5'}}>Budget</small>
          </div>
          <div className="col-md-4" style={{textAlign: 'center'}}>
            <label>{success}</label><br />
            <small style={{opacity: '0.5'}}>Success</small>
          </div>
        </div>
      </div>
    );
  }
}

export default SampleCard;
