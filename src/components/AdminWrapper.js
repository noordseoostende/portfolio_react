import React, { Component } from 'react';
import "./assets/css/admin.css";


import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
  toolbar: {
    paddingRight: 24
  },
  appBar: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'noWrap',
    width: drawerWidth
  }
})

class AdminWrapper extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div id="admin-page">
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
            >Admin</Typography>
          </Toolbar>
        </AppBar>
        <Drawer 
        classes={{
          paper: classes.drawerPaper}}
          variant="permanent"
          open={true}
        >
          <List>
            <ListItem>
              Dashboard
            </ListItem>
          </List>
        </Drawer>
      {this.props.children}
    </div>);
  }
}

export default withStyles(styles)(AdminWrapper);
