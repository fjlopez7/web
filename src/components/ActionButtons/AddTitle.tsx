import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextFieldIcon from '@material-ui/icons/TextFields';
import { Tooltip } from '@material-ui/core';

export default function AddTitle(props: any) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [typeOfTitle, setType] = React.useState("Titulo");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleAdd = () => {
    if (title !== ""){
      props.addEntry({entry: title, type: typeOfTitle});
      setTitle("");
      setType("Titulo");
      setOpen(false);
    } else {alert("Campo no puede ser vacio")}
  }; 

  return (
    <div>
      <Tooltip title="Añadir Titulo">
        <Button
        className={classes.addBtn}
        variant="text" 
        onClick={handleClickOpen}
        startIcon={<TextFieldIcon/>}
        > 
        </Button>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Añadir Titulo</DialogTitle>
        <DialogContent>
          <select className="select-text" id="current-select" onChange={handleChangeType}>
            <option value="Titulo">Titulo</option>
            <option value="Subtitulo 1">Subtitulo 1</option>
            <option value="Subtitulo 2">Subtitulo 2</option>
          </select>
          <TextField
            id="text-field"
            onChange={handleChangeTitle}
            placeholder="Ingresa un titulo o subtitulo"
            required = {true}
            variant="outlined"
            autoFocus
            margin="dense"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancelar
          </Button>
          <Button onClick={handleAdd} className={classes.addBtn}>
            Crear
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles({
  addBtn: {
    color: '#924f96',
  },
});