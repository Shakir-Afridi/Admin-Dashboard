import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SideNav from './components/SideNavBar/sidebarNewMain';

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Route exact path='/' component={SideNav}></Route>
            {/* <Route exact path='/' component={login}></Route> */}
            {/* <Route exact path='/signup' component={signup}></Route> */}
            {/* <Route exact path='/dashboard' component={dashboard}></Route> */}
            {/* <Route exact path='/drawer' component={drawer}></Route> */}
        </div>
    </BrowserRouter>
    )
} 

export default App;
