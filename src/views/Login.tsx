import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/Login.css';
import { userLogin } from '../redux/actions/user';
import { useDispatch } from 'react-redux';
import { SIGN_IN } from '../graphql/Mutations';
import { useMutation } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
//import { GoogleLogin, GoogleLogout } from 'react-google-login';

//const CLIENT_ID = '566539914076-loi1kuahcd3d376dakr0hjkeerck2h2j.apps.googleusercontent.com';

export const Login = () => {
    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    const dispatch = useDispatch();
   
  
    const [createSessionMutation] = useMutation(SIGN_IN);
      
    const onLogin = () => {
  
        if ( email.length === 0 || password.length === 0 ) {
          alert( 'Email o contraseña no valido.');
          return;
        }
        
        createSessionMutation({
          variables: { email: email, password: password}
      }).then(responseData => {
          dispatch(userLogin(responseData.data));
        
        })
        .catch(err =>{
          alert('Email o contraseña no valido');
        })
    };
      
    

    return (
        <div className="login">
            <h1>Ingresar</h1>
            <TextField 
              id="email" 
              className="input" 
              label="Usuario" 
              onChange={e => setEmail(e.target.value)}>
            </TextField>
            <br/>
            <TextField 
              id="password" 
              className="input" 
              label="Contraseña" 
              type="password"
              onChange={e => setPassword(e.target.value)}>    
            </TextField>
            <br/>
            <Button variant="contained"  className={classes.submit} onClick={() => {onLogin()}}>
                Ingresar
            </Button>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
  submit:{
    backgroundColor: '#4db977',
    color: 'white',
    textAlign: 'center',
    paddingLeft: 0,

  },

  
}));
