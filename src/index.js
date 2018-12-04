import React from 'react';
import ReactDOM from 'react-dom';
// import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import Header from './components/sidebar';
import Footer from './components/footer';
import login from './components/login';
import signup from './components/singup';
import dashboard from './components/dashboard';
import drawer from './components/drawer';

// import Background from './assets/images/phone.jpg';

// import SideNavPage from './components/sidebar';
import Main from './components/main';

var sectionStyle = {
    width: "100%",
    // height: window.innerHeight + "px",
    // backgroundImage: "url(" + Background + ")",
    // backgroundColor: "#E5E7E9",
    backgroundSize: 'cover',
  };
const App = () => {
    return (
        <BrowserRouter>
        <div style={sectionStyle}>
            <Route exact path='/sidenav' component={Main}></Route>
            <Route exact path='/' component={login}></Route>
            {/* <Route exact path='/signup' component={signup}></Route> */}
            {/* <Route exact path='/dashboard' component={dashboard}></Route> */}
            <Route exact path='/drawer' component={drawer}></Route>
        </div>
    </BrowserRouter>
    )
} 

ReactDOM.render(
    <App />
    , document.querySelector('#root'))
