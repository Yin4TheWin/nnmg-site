import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: 'flex-end',
        overflowX: 'auto',
        background: '#ffffff',
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarLink: {
        color: 'black',
        padding: theme.spacing(2),
        flexShrink: 0,
    },
  }))

export default function Navbar(){
    const classes = useStyles()
    return (<React.Fragment>
        <AppBar position="sticky">
        <Toolbar component="nav" variant="dense" className={classes.toolbar}>
            <Link
            color="inherit"
            noWrap
            variant="body2"
            href="#about"
            className={classes.toolbarLink}
            > About </Link>
            <Link
            color="inherit"
            noWrap
            variant="body2"
            href="#games"
            className={classes.toolbarLink}
            > Our Games </Link>
            <Link
            color="inherit"
            noWrap
            variant="body2"
            href="#contact"
            className={classes.toolbarLink}
            > Contact </Link>
            <Link
            color="inherit"
            noWrap
            variant="body2"
            className={classes.toolbarLink}
            > Devblog </Link>
            <Button variant="outlined" href='/signin' size="small">
            Log In
            </Button>
        </Toolbar>
        </AppBar>
    </React.Fragment>)
}