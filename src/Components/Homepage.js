import React from 'react';
import Navbar from './Navbar'
import Hero from '../Images/hero.png'
import TypeWriter from 'react-typewriter';
import AboutText from '../Texts/About'
import Duke from '../Images/dukeAva.png'
import Pulse from 'react-reveal/Pulse';
import Markdown from 'markdown-to-jsx';
import { Paper, makeStyles, Typography, Grid, Avatar } from '@material-ui/core';

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
        display: "flex",
        flexDirection: 'column',
        alignItems:'center' 
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
            <Typography variant="h5" fontWeight="fontWeightBold" m={1} style={{paddingTop: "2vh", paddingLeft: "2vw"}}>Meet the Team</Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <br></br>
                <Avatar>Y</Avatar>
                <br></br>
                <Typography variant="h6">Franklin "YinFTW" Yin</Typography>
                <br></br>
                <Typography style={{width:'90%', margin:'auto'}}>Hi everyone! My name's Franklin (or Yin4TheWin), and I'm the developer for NNMG. I do all the code stuff for the game, and I made this site as well! If you want to see this site's code you can check it out <a href="https://github.com/Yin4TheWin/nnmg-site">here</a> on Github. I'm still pretty new to React, so feedback would be appreciated: hit me up at yin4thewin@gmail.com.<br/><br/>Other reasons to hit me up include questions about the game, loneliness, boredom or literally anything. We're also always open for new programmers, writers, voice actors or artists, so let me know about that too!</Typography>
                <br></br>
            </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <br></br>
                <Avatar src={Duke}/>
                <br></br>
                <Typography variant="h6">Duke of Marlins (Name anon)</Typography>
                <br></br>
                <Typography style={{width:'90%', margin:'auto'}}>Duke of Marlins is your friendly fish for writing. The Duke of Marlins holds the following credits, as their subjects will testify under the threat of becoming undone: Saving the world multiple times, predicting the fate of the universe, being a really good writer, and coming up with the pre-production title of this game: MarlinQuest. If there are any queries or criticisms of the game, please ask someone else. They are solely responsible for 5% of the plot, and not actually programming. The Duke will update accordingly when they hear about it.<br/><br/></Typography>
                <br></br>
            </Paper>
            </Grid>
      </Grid>
        </Paper>
    </React.Fragment>)
}