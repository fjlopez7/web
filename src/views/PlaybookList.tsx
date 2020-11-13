import React from 'react';
import { clientPlaybooks } from '../graphql/Client';
import { useQuery } from '@apollo/client';
import { GET_ALL_PLAYBOOKS } from '../graphql/PlaybookMutations';
import { Playbook } from '../interfaces/index';
import { map } from 'underscore';
import { PlaybookCard } from '../components/PlaybookCard';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';

export const PlaybookList = () => {
  let history = useHistory();
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_ALL_PLAYBOOKS, {
    client: clientPlaybooks,
  });

  const redirect = () =>{
    history.push("/createplaybook")
  }
  if (loading) {
    return(
      <>
      <h2>Cargando Playbooks...</h2>
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
    <div className={classes.title}>Playbooks</div>
    <Button variant="contained" type="submit" className={classes.button} startIcon={<AddIcon />}onClick={() => {redirect()}}>
      Nuevo Playbook
      </Button>
    <Grid container spacing={2} >
        {map(data.getAllPlaybooks, (p: Playbook ) =>(
         <PlaybookCard playbook={p}/>
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