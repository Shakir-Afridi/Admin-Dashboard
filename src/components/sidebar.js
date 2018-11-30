
import React, {Component} from 'react';

import Header from './header';

export default class Example extends Component {
 
    constructor(props) {
        super(props);
 
        this.state = {
        };
    }
    
    componentDidMount(){
    }

    render() {
        return (
            <div>
                <nav> <Header /> </nav>
            </div>
        );
    }
}