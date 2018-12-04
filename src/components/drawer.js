import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TableIcon from '@material-ui/icons/TableChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// import { Breadcrumb } from 'react-bootstrap';
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { createBrowserHistory } from 'history';

// components
import SimpleCard from '../components/simplecard';

const drawerWidth = 240;

const styles = theme => ({
 card: {
    // backgroundColor: '#8B9292',
    minWidth: 370,
  },
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: '#28343a',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#28343a',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    manuItemClicked: 'Dashboard'
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  logout(){
    const history = createBrowserHistory();
    history.push('/');
    history.go('/');
  }

  renderComponent = (componentName) => {
    this.setState({
        mobileOpen: false,
        manuItemClicked: componentName
    })
  }

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <List>
            <ListItem button key={'Dashboard'} style={{height: '45px'}} onClick={() => this.renderComponent('Dashboard')}>
              <ListItemIcon style={{color: '#F8F9F9'}}>  <DashboardIcon /> </ListItemIcon>
              <ListItemIcon style={{color: '#F8F9F9'}}> <text>Dashboard</text></ListItemIcon>
            </ListItem>
            <ListItem button key={'Table'} style={{height: '45px'}}  onClick={() => this.renderComponent('Table')}>
              <ListItemIcon style={{color: '#F8F9F9'}}>  <TableIcon /> </ListItemIcon>
              <ListItemIcon style={{color: '#F8F9F9'}}> <text>Table</text></ListItemIcon>
            </ListItem>
            <ListItem button key={'Inbox'} style={{height: '45px'}}  onClick={() => this.renderComponent('Inbox')}>
              <ListItemIcon style={{color: '#F8F9F9'}}>  <InboxIcon /> </ListItemIcon>
              <ListItemIcon style={{color: '#F8F9F9'}}> <text>Inbox</text></ListItemIcon>
            </ListItem>
            <ListItem button key={'Mail'} style={{height: '45px'}}  onClick={() => this.renderComponent('Mail')}>
              <ListItemIcon style={{color: '#F8F9F9'}}>  <MailIcon /> </ListItemIcon>
              <ListItemIcon style={{color: '#F8F9F9'}}> <text>Graph</text></ListItemIcon>
            </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
              Logo
            </Typography>
            <Button color="inherit" onClick={this.logout}>Logout</Button>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <SimpleCard renderComp={this.state.manuItemClicked}/>
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
