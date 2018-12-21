import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SideNav from './components/SideNavBar/sidebarNewMain';
import Login from './components/Login/login';
import SignUp from './components/Login/SignUp';

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/dashboard' component={SideNav}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
            {/* <Route exact path='/dashboard' component={dashboard}></Route> */}
            {/* <Route exact path='/drawer' component={drawer}></Route> */}
        </div>
    </BrowserRouter>
    )
} 

export default App;
