import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/Login.css';
import { useDispatch } from 'react-redux';
import { SIGN_UP } from '../graphql/Mutations';
import {  useMutation } from '@apollo/client';
import { userSingup } from '../redux/actions/user';
import { makeStyles } from '@material-ui/core/styles';




export const SingUp = () => {
    const classes = useStyles();
    const [username, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirm_password, setConfirmPassword] = React.useState('');

    const dispatch = useDispatch();
    const [createUserMutation] = useMutation(SIGN_UP);

    function validateEmail(email: string) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const createUser = () => {
        if(username.length === 0){
            alert("Ingrese un nombre valido");
        }
        else if(!validateEmail(email)){
            alert("Ingrese un correo valido");
        }
        else if(password.length === 0){
            alert("Ingrese una contraseña valida");
        }
        else if(password !== confirm_password){
            alert("Las contraseñas no coinciden");
        }

        else if (username.length !== 0 && email.length !== 0  && password === confirm_password)
            createUserMutation({
                variables: { email: email, password: password, name: username, confirmPassword: confirm_password}
            }).then(response => {
                dispatch(userSingup(response.data));

                })
               .catch(err =>{
               alert(err.message)
              })
            
      };

    return (
        <div className="login">
            <h1>Registrate</h1>
            <TextField id="name" className="input" label="Nombre Usuario" onChange={e => setName(e.target.value)}></TextField>
            <br/>
            <TextField id="email" className="input" label="Correo Electrónico"  onChange={e => setEmail(e.target.value)}></TextField>
            <br/>
            <TextField id="password" className="input" label="Contraseña" type="password" onChange={e => setPassword(e.target.value)}></TextField>
            <br/>
            <TextField id="confirmpassword" className="input" label="Confirmar Contraseña" type="password" onChange={e => setConfirmPassword(e.target.value)}></TextField>
            <br/>
            <Button variant="contained"  className={classes.submit} onClick={() => {createUser()}}>
                Registrarse
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