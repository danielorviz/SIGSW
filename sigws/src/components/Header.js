import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TuneIcon from '@mui/icons-material/Tune';

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
  filterButton: {
    marginRight: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    color: 'inherit',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
}));

function Header({ toggleFilters }) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        SIGSW
      </Typography>
      
      <Toolbar> 
      <button onClick={toggleFilters} className={classes.filterButton} style={{marginRight:'1rem'}}>
          <TuneIcon/>
      </button>
      <Link to="/" className={classes.link}>
          <Button color="inherit">General</Button>
        </Link>
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
