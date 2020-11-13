import React, {useState} from "react"
import { useSelector } from 'react-redux';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function Profile() {
    const name = useSelector((state: any) => {
      return state.user.userName
    });
    const email = useSelector((state: any) => {
      return state.user.userEmail
    });
    const job = useSelector((state: any) => {
      return state.user.userJob
    });
    const classes = useStyles();
    const rows = [{

    }
    ];

    return (
      <>
      <div className={classes.title}> Perfil</div>
      <Paper className={classes.root}>
        <Avatar className={classes.avatar} src="/broken-image.jpg" />
        <div className={classes.container}>
          <Typography variant="h6">Usuario: {name} </Typography>
          <Typography variant="h6">Correo: {email} </Typography>
          <Typography variant="h6">Cargo: Creador de Contenido </Typography>
        </div>
      </Paper>

      </>
    );
  }; 

  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      width: '70%',
      margin: 'auto',
      display: 'flex',
    },
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
    container: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: 20,
    },
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      margin: 20,
    },
}));