import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    alignItems: 'center',
    backgroundColor: '#333',
    paddingTop: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    marginRight: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        SIGSW
      </Typography>
      <Toolbar>
        <Link to="/oviedo" className={classes.link}>
          <Button color="inherit">Oviedo</Button>
        </Link>
        <Link to="/gijon" className={classes.link}>
          <Button color="inherit">Gijon</Button>
        </Link>
      </Toolbar>

    </AppBar>
  );
}

export default Header;
