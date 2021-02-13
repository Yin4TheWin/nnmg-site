import React from 'react';
import Navbar from './Navbar'
import Hero from '../Images/BlogHero.png'
import AboutText from '../Texts/About.md'
import Pulse from 'react-reveal/Pulse';
import Markdown from 'markdown-to-jsx';
import GalleryEntry from './GalleryEntry'
import { Paper, makeStyles, Typography, Grid, Avatar } from '@material-ui/core';
import Fight from '../Images/fight.png'
import Post0 from '../Texts/Post0'
import Post1 from '../Texts/Post1'
import SFTLD from '../Images/SFTLD.png'

const useStyles = makeStyles((theme)=>({
    root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
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
        alignItems:'center',
        height: '100%'
      }, aboutPaper: {
          margin: 'auto',
          width: '88%',
      }
}))

const posts=[{
    image: SFTLD,
    title: "SFTLD 1: Meet the Crew",
    text: Post0
},{
    image: Hero,
    title: "Hello World",
    text: Post1
}
]

export default function Posts(){
    const classes=useStyles();
    const url = new URL(window.location);
    let postIndex=parseInt(url.searchParams.get("id"))
    //REMEMBER TO REPLACE 1 WITH MOST RECENT POST INDEX
    if(postIndex<0||postIndex>1||!Number.isInteger(postIndex))
        postIndex=1
    return(<React.Fragment>
        <Navbar/>
        <Paper className={classes.paper} variant="outlined" elevation={3}>
            <img className={classes.heroImg} src={posts[postIndex].image}/>
        </Paper>
        <Paper className={classes.aboutPaper}>
            <Pulse>
                <Typography variant="h3" id="about" style={{textAlign:"center", paddingTop: "2vh", paddingBottom: "2vh"}}>{posts[postIndex].title}</Typography>
            </Pulse>
      <Markdown className={classes.aboutText}>{posts[postIndex].text}</Markdown>
      <br/><br/>
        </Paper>
    </React.Fragment>)
}