import React from 'react';
import { Link } from 'react-router-dom';
import { clientPlaybooks } from '../graphql/Client';
import { GET_PLAY_DATA } from '../graphql/PlaysMutations'
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';


export const PlayCard = (props: any) => {
  const classes = useStyles();
  const {loading, error, data} = useQuery(GET_PLAY_DATA, {
    variables: {id: props.play },  
    client: clientPlaybooks,
  });
if (loading) {
  return(
    <>
    <h2>Cargando Plays...</h2>
    </>
  )
}
if (error) {
return(
  <>
  {error}
  </>
)

}
return (
  <>
  <Grid item> 
      <Card className={classes.root}>
        <Typography className={classes.keywords}>
            {data.getPlayData.keywords.join(' - ')}
        </Typography>
        <LibraryBooksIcon className={classes.icon}/>
        <Typography className = {classes.title} gutterBottom variant="h5" component="h2">
            {data.getPlayData.title}
        </Typography>
        <Typography className={classes.progress}>
            VERSIÓN: {data.getPlayData.version}
        </Typography>
        <div className={classes.actions}>
          <Link className={classes.button} to={{ pathname: `/play/${data.getPlayData.id}`, state: { id: data.getPlayData.id } }}> 
            Ver
          </Link>
          <Link className={classes.button} to={{ pathname: `/play/${data.getPlayData.id}`, state: { id: data.getPlayData.id } }}> 
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
    justifyItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 500,
    textAlign: 'center',
    margin: 5,
  },
  keywords: {
    fontWeight: 400,
    fontSize: 13,
    color: '#4db977',
    textAlign: 'center',
    margin: 5
  },
  icon: {
      fontSize: 80,
      alignSelf: 'center',
  },
  progress: {
    opacity: 0.85,
    fontSize: 12,
    fontWeight: 400,
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