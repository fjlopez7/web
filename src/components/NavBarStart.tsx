import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { IconContext } from 'react-icons';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
export default function NavbarStart() {
  const classes = useStyles();
  let history = useHistory();
  const redirect1 = () =>{
    history.push("/login")
  }
  const redirect2 = () =>{
    history.push("/singup")
  }
  return (
      <IconContext.Provider value={{ color: '#000000' }}>
      <div className='navbar'>
        
        <Button className={classes.button} variant="contained" onClick={() => {redirect1()}}>Ingresar</Button>

        <Button className={classes.button} variant="contained" onClick={() => {redirect2()}}>Registrate</Button>
      </div>
    </IconContext.Provider>
  );
};

const useStyles = makeStyles((theme) => ({
  button:{
    backgroundColor: '#4db977',
    color: 'white',
    textAlign: 'center',
    marginLeft: '2rem',
    paddingLeft: 0,

  },

  
}));