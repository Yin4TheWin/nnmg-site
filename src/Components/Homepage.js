import React from 'react';
import Navbar from './Navbar'
import Hero from '../Images/hero.png'
import TypeWriter from 'react-typewriter';
import AboutText from '../Texts/About'
import Pen from '@material-ui/icons/Create'
import Pulse from 'react-reveal/Pulse';
import Markdown from 'markdown-to-jsx';
import { Paper, makeStyles, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    heroImg: {
        width: '85%',
        height: 'auto',
      }, panelTwo: {
        width: '100%',
        height: '100vh',
        spacing: 0,
      },
      text: {
       fontSize: 60,
       alignSelf: 'center'
      }, aboutText: {
          paddingLeft: '2vw',
          margin: 'auto'
      }, paper: {
        alignItems: 'center',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }, aboutPaper: {
          margin: 'auto',
          width: '90%',
      }
}))
export default function Homepage(){
    const classes=useStyles();
    return(<React.Fragment>
        <Navbar/>
        <Paper className={classes.paper} variant="outlined" elevation={3}>
            <img className={classes.heroImg} src={Hero}/>
        </Paper>
        <Paper className={classes.aboutPaper}>
            <Pulse>
                <Typography variant="h3" style={{textAlign:"center", paddingTop: "2vh", paddingBottom: "2vh"}}>Welcome to NNMG Studios</Typography>
            </Pulse>
            <Markdown className={classes.aboutText}>{AboutText}</Markdown>
        </Paper>
    </React.Fragment>)
}