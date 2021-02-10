import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root: {
        height: '100%'
      },
      media: {
        height: 200,
      }
}))

export default function GalleryEntry(props){
    const classes=useStyles()
    const {image, title, caption, button, link} = props
    if(!button)
    return(<Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {caption}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>)
    return(<Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {caption}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary" href={link}>
          Learn More
        </Button>
      </CardActions>
      </Card>)
}