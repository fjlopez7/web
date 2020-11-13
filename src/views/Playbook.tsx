import React from 'react';
import { clientPlaybooks } from '../graphql/Client';
import { Link } from 'react-router-dom';
import { GET_PLAYBOOK_ID } from '../graphql/PlaybookMutations'
import { useQuery } from '@apollo/client';
import Grid  from '@material-ui/core/Grid';
import { PlayCard } from '../components/PlaybookPlayCard';
import { map } from 'underscore';
import { makeStyles } from '@material-ui/core/styles';

export const Playbook = (props: any) => {

  const classes = useStyles();
    const  { loading, error, data } = useQuery(GET_PLAYBOOK_ID, {
        client: clientPlaybooks,
        variables: { id: props.match.params.id },
      });
      if (loading) {
        return(
          <>
          <h2>Cargando Playbook...</h2>
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
        <div className= {classes.title}>{data.getPlaybookById.title}</div>
        <Link className={classes.submit} to={{ pathname: `/editplaybook/${props.match.params.id}`, state: { id: props.match.params.id } }}> 
                EDITAR
        </Link> 

        <div className={classes.play}>Plays</div>

        <Grid container spacing={2}>
          {map(data.getPlaybookById.units, (p: String ) =>(
          <PlayCard play={p}/>
          ))}
        </Grid>
        
        
        </>
      );
}

const useStyles = makeStyles((theme) => ({
  keywords: {
    fontWeight: 500,
    fontSize: 20,
    color: '#6573c3',
    margin: 5
  },
  play: {
    fontSize: 35,
    fontWeight: 500,
    margin: 20,
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
  },
  button: {
    opacity: 0.75,
    textDecoration: 'none',
    color: '#1769aa',
    textAlign: 'center',
    width: '100%',
    padding: 4,
    fontSize: 14,
  },
  submit:{
    textDecoration: 'none',
    borderRadius: 6,
    border: 'solid 1px',
    backgroundColor: '#4db977',
    textAlign: 'center',
    padding: 10,
    color: 'white',
    position: 'absolute',
    top: 140,
    right: 60,
  },

  title: {
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 50,
    fontSize: 43,
    fontWeight: 500,
  },
}));