import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import './skills.styles.scss'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import {JSLogo, CSSLogo, HTML5Logo, Dart} from './index'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  box: {
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: theme.spacing(1),
    textAlign: 'center',
  
  },
}));


const Skills = () => {
    const classes = useStyles();

    return (
        <div className="container classes.root">
        <Grid container  alignContent="center" spacing={3} className="content">
        <Grid item xs={12} sm={6} md={3}>
          <Box className={classes.box} boxShadow={3} style={{backgroundColor: 'brown'}} >
              <HTML5Logo className="logo-container"/>
              <Grid>
                <Grid>
                <Typography variant="h6"> CSS </Typography>
                </Grid>
                <Grid>
                    Rating: 90%
                </Grid>
             </Grid>
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className={classes.box} boxShadow={3} style={{backgroundColor: 'light-blue'}} >
              <CSSLogo className="logo-container"/>
              <Grid>
                <Grid>
                <Typography variant="h6"> CSS </Typography>
                </Grid>
                <Grid>
                    Rating: 90%
                </Grid>
             </Grid>
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Box className={classes.box} boxShadow={3} style={{backgroundColor: 'yellow'}} >
              <JSLogo className="logo-container"/>
              <Grid>
                <Grid>
                <Typography variant="h6"> Javascript </Typography>
                </Grid>
                <Grid>
                    Rating: 80%
                </Grid>
             </Grid>
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Box className={classes.box} boxShadow={3} style={{backgroundColor: 'yellow'}} >
              <Dart className="logo-container"/>
              <Grid>
                <Grid>
                <Typography variant="h6"> Javascript </Typography>
                </Grid>
                <Grid>
                    Rating: 80%
                </Grid>
             </Grid>
        </Box>
        </Grid>
        
        
        
            
        </Grid>
    </div>
    )
}

export default Skills;