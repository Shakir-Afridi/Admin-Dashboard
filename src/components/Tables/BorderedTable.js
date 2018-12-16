import React, { Component } from 'react';

class BorderedTable extends Component {

    render(){

        return (
            <div className="myContainer">
                <h3 style={{textAlign: 'center'}}>Responsive Bordered Table</h3>
                <hr/>
                <div className="table-responsive">          
                    <table 
                    // id="myTable2"
                    className="table table-bordered" style={{tableLayout: 'auto'}} >
                        <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
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
                </div>
            </div>  
        )
    }
}

export default BorderedTable;