import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ModalDialog from "./modalDialog";
import {
  BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const pages = ['Home', 'Services','About us'];



const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" color="danger">
      <Toolbar>
      <Link to="">
      <IconButton>
        <img src={require("./Assets/scopeLogo.webp")} alt="Calgary Scope Logo" style={{width: 200, height: 50 }}/>
      </IconButton>
      </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            { <Link to="">
              <Button color='secondary'>
              Home
              </Button>
              </Link>}
              {<Link to="/services">
              <Button color='secondary'>
              Services
              </Button>
              </Link>}
              {<Link to="/about-us">
              <Button color='secondary'>
              About us
              </Button>
              </Link>}
              {<Link to="/admin">
              <Button color='secondary'>
              Admin
              </Button>
              </Link>}
          </Box>
         <Link to="/create-account"> 
        <Button color="secondary">
          Sign up
        </Button>
        </Link>
        <Button color="secondary" onClick={handleOpen}>
          Log in
        </Button>
      </Toolbar>
      <ModalDialog open={open} handleClose={handleClose} />
    </AppBar>
  );
};

export default Navbar;