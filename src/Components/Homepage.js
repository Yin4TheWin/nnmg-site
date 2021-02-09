import React from 'react';
import Navbar from './Navbar'
import Hero from '../Images/hero.png'
import TypeWriter from 'react-typewriter';
import { Paper, makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
    mainGrid: {
        width: '100%',
        height: '100vh',
        spacing: 0,
        backgroundImage: `url(${Hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignItems: 'center',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      text:{
       fontSize: 60,
       alignSelf: 'center'
      }
}))
export default function Homepage(){
    const classes=useStyles();
    return(<React.Fragment>
        <Navbar/>
        <Paper className={classes.mainGrid}>
            <TypeWriter typing={1} className={classes.text}>NNMG Studios</TypeWriter>
        </Paper>
    </React.Fragment>)
}