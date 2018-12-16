import React,{ Component } from 'react';

class DataTable extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        window.$("#myTable").DataTable({
			"ordering": true,
            "searching": true,
            "select": true
        });
    }

    componentDidUpdate() {
        window.$("#myTable").DataTable({
			"ordering": true,
			"searching": true,
            "select": true
        });
    }

    render(){
        window.$("#myTable").DataTable().destroy();
        return (
            <div className="myContainer">
                <h3 style={{textAlign: 'center'}}>Responsive Hover DataTable</h3>
                <hr/>
                <div className="table-responsive">          
                    <table 
                        id="myTable"
                            className="table table-hover" style={{tableLayout: 'auto'}} >
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
        )
    }
}

export default DataTable;