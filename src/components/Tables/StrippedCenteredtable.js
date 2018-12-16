import React, { Component } from 'react';

class StrippedCenteredTable extends Component {

    render(){

        return (
            <div className="myContainer">
                <h3 style={{textAlign: 'center'}}>Responsive Striped and centered Table</h3>
                <hr/>
                <div className="table-responsive">          
                    <table 
                    // id="myTable1"
                    className="table table-striped" style={{tableLayout: 'auto'}} >
                        <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Firstname</th>
                            <th style={{textAlign: 'center'}}>Lastname</th>
                            <th style={{textAlign: 'center'}}>Email</th>
                        </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                        <tr>
                            <td>Ahmad</td>
                            <td>Ali</td>
                            <td>ahmad@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Waqar</td>
                            <td>Younis</td>
                            <td>Waqar@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Zaka</td>
                            <td>Ullah</td>
                            <td>zaka@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Ali</td>
                            <td>Ahmad</td>
                            <td>ali@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Ghufran</td>
                            <td>ali</td>
                            <td>ghufran@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Awais</td>
                            <td>Ahmad</td>
                            <td>awais@gmail.com</td>
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
        )
    }
}

export default StrippedCenteredTable;