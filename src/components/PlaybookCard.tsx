import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

export const PlaybookCard = (props: any) => {
  const classes = useStyles();
  const {id, title, keywords} = props.playbook
  return (
    <>
    <Grid item> 
      <Card className={classes.root}>
        <Typography className={classes.keywords}>
            {keywords.join(' - ')}
        </Typography>
        <LibraryBooksIcon className={classes.icon}/>
        <Typography className = {classes.title} gutterBottom variant="h5" component="h2">
            {title}
        </Typography>
        <Typography className={classes.progress}>
            100%
        </Typography>
        <div className={classes.actions}>
            <Link className={classes.button} to={{ pathname: `playbook/${id}`, state: { id: id } }}> 
                Ver
            </Link> 
            <Link className={classes.button} to={{ pathname: `editplaybook/${id}`, state: { id: id } }}> 
                Editar
            </Link> 
        </div>
      </Card>
    </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 0,
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    textAlign: 'center',
    margin: 5,
  },
  keywords: {
    fontWeight: 400,
    fontSize: 15,
    color: '#4db977',
    textAlign: 'center',
    margin: 5,
  },
  icon: {
      fontSize: 80,
      alignSelf: 'center',
  },
  progress: {
    opacity: 0.85,
    fontSize: 15,
    fontWeight: 600,
    textAlign: 'center', 
  }, 

  collaborator: {
    fontSize: 13,
  },

  content:{
    display: 'flex',
    justifyContent: 'space-between',
    margin: 10,
  },
  right: {
    float: 'right',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 7,
  },
  button: {
    opacity: 0.75,
    textDecoration: 'none',
    color: '#4db977',
    textAlign: 'center',
    width: '100%',
    padding: 4,
    fontSize: 16,
    fontWeight: 600,
  },
}));