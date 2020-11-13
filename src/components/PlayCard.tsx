import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export const PlayCard = (props: any) => {
  const classes = useStyles();
  const {id, title, keywords, collaborators} = props.play
  let name = ''
  if (collaborators[0]){
    name = collaborators[0].name
  } 
  else {
    name = 'Sin colaborador'
  }
  return (
    <>
    <Grid item> 
      <Card className={classes.root}>
        <div className={classes.content}>
          <div>
          <Typography className={classes.keywords}>
              {keywords.join(' - ')}
            </Typography>
            <Typography className = {classes.title} gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography className={classes.collaborator} color="textSecondary">
              Colaboradores: {name}
            </Typography>
          </div>
          <div className={classes.right}> 
            <Typography className={classes.tag}>
              Terminado
            </Typography>
            <div className={classes.actions}>
              <Link className={classes.button} to={{ pathname: `play/${id}`, state: { id: id } }}> 
              Ver
              </Link> 
              <Link className={classes.button} to={{ pathname: `play/${id}`, state: { id: id } }}> 
              Editar
              </Link> 
            </div>
          </div>
        </div> 
      </Card>
    </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 0,
    width: 650,
  },
  title: {
    fontSize: 17,
    fontWeight: 600,
  },
  keywords: {
    fontWeight: 400,
    fontSize: 14,
    color: '#4db977',
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
    justifyContent: 'space-between',
  },
  button: {
    textDecoration: 'none',
    fontWeight: 500,
    color: '#4db977',
    textAlign: 'center',
    width: '100%',
    padding: 4,
    fontSize: 15,
  },
  tag: {
    opacity: 0.85,
    fontSize: 14,
    fontWeight: 600,
    padding: '0px 10px',
    backgroundColor: '#4db977',
    justifyContent: 'center', 
    borderRadius: 50,
    color: 'white'
  }, 
}));