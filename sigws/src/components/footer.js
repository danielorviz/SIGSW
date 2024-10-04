import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1">
          © {new Date().getFullYear()} Daniel Orviz Suárez - UO237512. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;