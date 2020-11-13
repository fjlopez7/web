import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { map } from 'underscore'
import { Typography } from '@material-ui/core';
import { TarjetaEquipo } from '../components/TarjetaEquipo'
import { obtenerTeams } from '../redux/actions/teams'

interface IState {
  teams: ITeams;
}
interface ITeams {
  teams: ITeam[];
}

interface ITeam {
    id: number;
    iniciales: string;
    titulo: string;
    fecha: string;
    urlImagen: string;
    urlTitulo: string;
    descripcionEquipo: string;
}
export const Teams = () => {
  const dispatch = useDispatch();
  
  const teams = useSelector((state: any) => state.teams.teams)
  const loading = useSelector((state: any) => state.teams.loading)
  const error = useSelector((state: any) => state.teams.error)

useEffect(() => {
    dispatch(obtenerTeams())}, [])
  return (
    <>
        {loading  && <h1>...Cargando</h1>}
        {teams.length > 0 &&  map(teams, (tm: ITeam) =>( 
           <TarjetaEquipo team={tm} key={tm.id}/>
        ))}
        {teams.length === 0 && !loading && <h1>No hay equipos T.T </h1>  }
        {error && !loading  && <h2>{error}</h2>}
    </>
  );
};
