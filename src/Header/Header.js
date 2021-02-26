import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import { AuthDialog } from './AuthDialog/AuthDialog';
import { useStylesHeader } from './HeaderStyle'

const Header = () => {
  const classes = useStylesHeader();
  const [openLogin, setOpenLogin] = useState(false);

  const openLoginDialog = () => {
    setOpenLogin(true)
  };
  const closeLoginDialog = () => {
    setOpenLogin(false)
  };

  return (
  <AppBar position="fixed" color="primary">
        <Container fixed>
          <Toolbar>
            <IconButton
              edge="start" color="inherit" aria-label="menu"
              className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              My library
            </Typography>
            <Box mr={3}>
              <Button variant="outlined" color="inherit" id="form-dialog-login" onClick={openLoginDialog}>
                Log In
              </Button>
              <AuthDialog
                id="form-dialog-login"
                open={openLogin}
                onClose={closeLoginDialog}
                onClick={closeLoginDialog}
              >
                  <Button onClick={closeLoginDialog} color="primary">Cancel</Button>
                  <Button onClick={closeLoginDialog} color="primary">Log in</Button>
                </AuthDialog>
            </Box>
            <NavLink style={{textDecoration: "none"}} to="/mylibrary-signup">
              <Button variant="contained" color="secondary">
                Sign Up
              </Button>
            </NavLink>
          </Toolbar>
        </Container>
      </AppBar>
      )
};

export { Header };