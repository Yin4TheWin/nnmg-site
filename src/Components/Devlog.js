import React from 'react';
import Navbar from './Navbar'
import Hero from '../Images/BlogHero.png'
import Pulse from 'react-reveal/Pulse';
import GalleryEntry from './GalleryEntry'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Paper, makeStyles, Typography, Grid, Avatar } from '@material-ui/core';
import Cutscene from '../Images/cutscene.png'
import Fight from '../Images/fight.png'
import SFTLD from '../Images/SFTLD.png'
import Post1Main from '../Images/Post1Main.png'


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
export default function Devlog(){
    const classes=useStyles();
    return(<React.Fragment>
        <Navbar/>
        <Paper className={classes.paper} variant="outlined" elevation={3}>
            <img className={classes.heroImg} src={Hero}/>
        </Paper>
        <Paper className={classes.aboutPaper}>
            <Pulse>
                <Typography variant="h3" id="about" style={{textAlign:"center", paddingTop: "2vh", paddingBottom: "2vh"}}>Welcome to the Devlog!</Typography>
            </Pulse>
            <br/>
      <Typography className={classes.aboutText}>The devlog is a place for our dev team to post updates about the game development process. I'll try to post at least once a week, though knowing my work flow this will probably be wildly inaccurate: expect a few weeks of daily posts then months of silence, on repeat. Seriously though, I'll try to post at least once a week. Our writer Duke of Marlins may occasionally post as well. Lastly, I'll try adding an email list or something soon, so you can sign up for updates if you wish. In the meantime, feel free to join our Discord (linked on homepage).</Typography>
      <br/><br/>
      <Grid container spacing={3} style={{margin:'auto', width:'98%'}}>
          <Grid item xs={12} sm={6}>
            <GalleryEntry image={Post1Main} title="New Moba/RPG Concept" caption="At the moment, Quixotic Quest is a traditional, turn-based RPG. But what if we could put a spin on this genre? What if we looked at two beloved game genres, took the best of both worlds (with a heavier emphasis on RPG) and tried to make something new out of it?" click='/devlog/read?id=1' desc="By YinFTW on 2/13/21"/>
          </Grid><Grid item xs={12} sm={6}>
            <GalleryEntry image={SFTLD} title="Straight from the Lore Docs: Meet the Crew!" caption="Hello, and welcome to the first ever edition of Straight From the Lore Docs! This will be a mini-series on the Devlog that aims to share a little bit about the lore and story we've been working on for our games. There will be minimal edits, if any, between the actual content on our lore docs and this blog post, so some statements may seem a bit weird or out of context. Don't worry if that's the case, things will start to make sense as more and more of the lore is revealed!" click='/devlog/read?id=0' desc="By YinFTW and Duke of Marlins on 2/11/21"/>
          </Grid>
      </Grid>
      <Typography variant="h3" id="contact" style={{textAlign:"center", paddingTop: "8vh", paddingBottom: "2vh"}}>Contact</Typography>
      <br/>
      <Typography className={classes.aboutText}>Whether you have questions about the development process or feedback about the game, we're here to fulfill any NNMG-related request you might have. Click to expand the accordions below and see our various modes of contact.</Typography>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>Game Updates and General Support</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Join our Discord! Although the Devblog will cover major updates, day to day changes, down to the exact commits that are being pushed to Github, will be posted on our Discord server.
            If you have questions about the game or its dev process, this is also where I'll likely respond the quickest. Here's the link to join: <a href="https://discord.gg/RUZNp3r">https://discord.gg/RUZNp3r</a>.
            Hope to see you there, we'd be happy to have you!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>Applications for Dev Team</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We're a small crew, and always looking for new people to join our team. If you have the time and are willing to apply, please send me an email at yin4thewin@gmail.com. I'd be honored to know that you think our projects are worth your time! We're currently looking for:<br/><br/>
            -Programmer (Unity)<br/>
            -Programmer (Web)<br/>
            -Writer<br/>
            -Artist<br/><br/>
            Unfortunately we are unable to offer financial compensation at this time. Additionally I cannot guarantee that we will generate any revenue, much less profit. However, if you've ever wanted to make a video game, want a cool project for your resume, or just want to hang out with a chill team, I encourage you to contact me! And if we ever do make money, know that you will definitely be compensated accordingly.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography>Applications for Beta Testing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              QA/Beta Testers are an indispensable part of any good dev team. They catch bugs, point out loopholes and generally offer the feedback necessary to make a great game a reality. I haven't worked out the specifics yet, but I'm currently thinking of implementing a "drops" system where users active on the devblog/Discord can get access to early release builds. A user's activity can be measured by them creating an account on this site that is also linked to their Discord account (hence the log in button in the navbar).
              While logged in, views and comments on the Devblog will contribute to that user's drop chances. I'll update this later when I work it all out, but in the meantime feel free to join the <a href="https://discord.gg/RUZNp3r">Discord</a> to stay tuned!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/><br/><br/>
        </Paper>
    </React.Fragment>)
}