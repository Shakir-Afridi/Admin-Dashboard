
import React, { Component } from 'react';

class SampleTable extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    render(){
        return(
            <div>
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="myContainer">
                        <h3 style={{textAlign: 'center'}}>Responsive Hover Table</h3>
                        <hr/>
                        <div className="table-responsive">          
                            <table className="table table-hover" style={{tableLayout: 'auto'}} >
                                <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                    <th>Occupation</th>
                                    <th>address</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Ahmad</td>
                                    <td>Ali</td>
                                    <td>ahmad@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Waqar</td>
                                    <td>Younis</td>
                                    <td>Waqar@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Zaka</td>
                                    <td>Ullah</td>
                                    <td>zaka@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Ali</td>
                                    <td>Ahmad</td>
                                    <td>ali@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Ghufran</td>
                                    <td>ali</td>
                                    <td>ghufran@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Awais</td>
                                    <td>Ahmad</td>
                                    <td>awais@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="myContainer">
                        <h3 style={{textAlign: 'center'}}>Responsive Bordered Table</h3>
                        <hr/>
                        <div className="table-responsive">          
                            <table className="table table-bordered" style={{tableLayout: 'auto'}} >
                                <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                    <th>Occupation</th>
                                    <th>address</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Ahmad</td>
                                    <td>Ali</td>
                                    <td>ahmad@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Waqar</td>
                                    <td>Younis</td>
                                    <td>Waqar@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Zaka</td>
                                    <td>Ullah</td>
                                    <td>zaka@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Ali</td>
                                    <td>Ahmad</td>
                                    <td>ali@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Ghufran</td>
                                    <td>ali</td>
                                    <td>ghufran@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Awais</td>
                                    <td>Ahmad</td>
                                    <td>awais@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="myContainer">
                        <h3 style={{textAlign: 'center'}}>Responsive Striped and centered Table</h3>
                        <hr/>
                        <div className="table-responsive">          
                            <table className="table table-striped" style={{tableLayout: 'auto'}} >
                                <thead>
                                <tr>
                                    <th style={{textAlign: 'center'}}>Firstname</th>
                                    <th style={{textAlign: 'center'}}>Lastname</th>
                                    <th style={{textAlign: 'center'}}>Email</th>
                                    <th style={{textAlign: 'center'}}>Occupation</th>
                                    <th style={{textAlign: 'center'}}>address</th>
                                </tr>
                                </thead>
                                <tbody style={{textAlign: 'center'}}>
                                <tr>
                                    <td>Ahmad</td>
                                    <td>Ali</td>
                                    <td>ahmad@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Waqar</td>
                                    <td>Younis</td>
                                    <td>Waqar@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Zaka</td>
                                    <td>Ullah</td>
                                    <td>zaka@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Ali</td>
                                    <td>Ahmad</td>
                                    <td>ali@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Ghufran</td>
                                    <td>ali</td>
                                    <td>ghufran@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                <tr>
                                    <td>Awais</td>
                                    <td>Ahmad</td>
                                    <td>awais@gmail.com</td>
                                    <td>Teacher</td>
                                    <td>Some address</td>
                                </tr>
                                </tbody>
                            </table>
                            {/* <div>
                            <hr/>
                            <ul className="pager" style={{float: 'right'}}>
                                <li><a href="#">Previous</a></li>
                                <li><a href="#">Next</a></li>
                            </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
        )
    }
}
  
export default SampleTable;