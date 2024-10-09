import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: theme.spacing(2),
    marginTop: 'auto',
    bottom: '0',
    position: 'fixed',
    width: '100%'
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="m">
        <Typography variant="body1" width="100%">
          © {new Date().getFullYear()} Master de Ingeniería Web - Universidad de Oviedo - Sistemas de Información Geográfica y Servicios Web.
        </Typography>
        <Typography variant="body3" width="100%">
          Daniel Orviz Suárez - UO237512. 
          Antonio Suárez Crespo - UO270543.
          Katherine Nicole Gómez Zamora - UO302265
        </Typography> 
    
      </Container>
    </footer>
  );
}

export default Footer;