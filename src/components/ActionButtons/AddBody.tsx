import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { Tooltip } from '@material-ui/core';

export default function AddBody(props: any) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [body, setBody] = React.useState("");
  const typeOf: string = "Cuerpo";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  };

  const handleAdd = () => {
    if (body !== ""){
      props.addEntry({entry: body, type: typeOf});
      setBody("");
      setOpen(false);
    } else {alert("Campo no puede ser vacio")}
  }; 

  return (
    <div>
      <Tooltip title="Añadir Cuerpo">
        <Button
        className={classes.addBtn}
        variant="text" 
        onClick={handleClickOpen}
        startIcon={<ViewHeadlineIcon/>}
        > 
        </Button>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Añadir Cuerpo</DialogTitle>
        <DialogContent>
          <TextField
            className="multiline-input"
            placeholder="Ingresa un parrafo"
            required = {true}
            variant="outlined"
            multiline
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            onChange={handleChange}
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