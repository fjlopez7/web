import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CodeIcon from '@material-ui/icons/Code';
import { Tooltip } from '@material-ui/core';



export default function AddCode(props: any) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [code, setCode] = React.useState("");
  const typeOf: string = "Codigo";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleAdd = () => {
    if (code !== ""){
      props.addEntry({entry: code, type: typeOf});
      setCode("");
      setOpen(false);
    } else {alert("Campo no puede ser vacio")}
  }; 

  return (
    <div>
      <Tooltip title="Añadir Codigo">
        <Button
        className={classes.addBtn}
        variant="text" 
        onClick={handleClickOpen}
        startIcon={<CodeIcon/>}
        > 
        </Button>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Añadir Codigo</DialogTitle>
        <DialogContent>
          <TextField
            placeholder="Ingresa el codigo"
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