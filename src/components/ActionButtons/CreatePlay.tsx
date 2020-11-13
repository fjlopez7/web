import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckIcon from '@material-ui/icons/CheckCircle';
import { clientPlaybooks } from '../../graphql/Client';
import {  useMutation } from '@apollo/client';
import { ADD_PLAY } from '../../graphql/PlaysMutations';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { encode } from 'js-base64';

interface inputCollaborator{
  id: string,
  name: string,
  email: string,
};

export default function CreatePlay(props: any) {
  let history = useHistory();
  const userId = useSelector((state: any) => {
    return state.user.userId
  });
  const userName = useSelector((state: any) => {
    return state.user.userName
  });
  const userEmail = useSelector((state: any) => {
    return state.user.userEmail
  });
  const currentCollaborator: inputCollaborator = {id: userId, name:userName, email: userEmail};
  const classes = useStyles();
  let list: String[] = [];
  let version: String = '1.0';
  const [open, setOpen] = React.useState(false);
  const [keywords, setKeywords] = React.useState(list);
  const [current, setCurrent] = React.useState('');
  const [title, setTitle] = React.useState('');

  const [addPlayMutation] = useMutation(ADD_PLAY,  {
    client: clientPlaybooks,
    }
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrent(event.target.value);
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddKeyword = () => {
    let auxList = keywords;
    auxList.push(current);
    setCurrent("");
    setKeywords(auxList);
    renderKeywords();
  };

  const renderKeywords = () => {
    ReactDOM.render(keywords.map(keyword => 
    <div><p>{keyword}</p></div>
      ), document.getElementById('keyword-area'));
  };

  const handleSubmit = () => {
    if (title === ""){
      alert("Ingresa un titulo");
    } else if (keywords.length === 0){
      alert("Ingresa una keyword")
    } else {
      addPlayMutation({
        variables: {title: title, version: version, keywords: keywords, collaborators: [currentCollaborator], file: encode(props.play)} 
    }).then(response => {
        setTitle('')
        setCurrent('')
        setKeywords(list)
        history.push("/plays")

    }).catch(err =>{
       alert(err.message)  
    })
    }
  };

  return (
    <div>
        <Button
        className={classes.addBtn}
        variant="contained" 
        onClick={handleClickOpen}
        startIcon={<CheckIcon/>}
        > Crear
        </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Crear Play</DialogTitle>
        <DialogContent>
          <p>Ingresa el titulo:</p>
          <input onChange={handleChangeTitle}></input>
          <p>Ingresa keywords (al menos 1):</p>
          <div id="keyword-area"></div>
          <input id="keyword-input" onChange={handleChange}></input>
          <Button
            onClick={handleAddKeyword}>
            +
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancelar
          </Button>
          <Button className={classes.addBtn} onClick={handleSubmit}>
            Finalizar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles({
  addBtn: {
    background: '#4db977',
    color: 'white',
    '&:hover': {
        background: '#4db977',
        color: 'black',
    }, 
  },
});