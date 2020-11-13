import React from 'react';
import { clientPlaybooks } from '../graphql/Client';
import { useQuery } from '@apollo/client';
import { GET_ALL_PLAYS } from '../graphql/PlaysMutations';
import { Play } from '../interfaces/index';
import { map } from 'underscore';
import { PlayCard } from '../components/PlayCard';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";


export const PlayList = () => {
  const { loading, error, data } = useQuery(GET_ALL_PLAYS, {
    client: clientPlaybooks,
  });
  const classes = useStyles();
  let history = useHistory();

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
    <div className={classes.title}>Plays</div>
    <Button variant="contained" type="submit" className={classes.button} startIcon={<AddIcon />} onClick={() => {history.push("/createplay")}}>
      Nuevo Play
      </Button>
    <Grid container spacing={2} >
        {map(data.getAllPlays, (p: Play ) =>(
         <PlayCard play={p}/>
        ))}
    </Grid>
    
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  button:{
    border: 'solid 1px',
    backgroundColor: '#4db977',
    color: 'white',
    position: 'absolute',
    top: 140,
    right: 60,
    textAlign: 'center',
    paddingLeft:0,
  },

  title: {
    textAlign: 'center',
    width: '40%',
    margin: 'auto',
    marginBottom: 50,
    marginTop: 50,
    fontSize: 45,
    fontWeight: 500,
  },
}));