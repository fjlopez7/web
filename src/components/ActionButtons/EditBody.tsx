import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Create';

interface EntryEdit {
  entry: string;
  id: number;
  editCurrent: any;
}

export default function EditBody(entryEdit: EntryEdit) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [entry, setEntry] = React.useState(entryEdit.entry);
  const typeOf: string = "Cuerpo";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeEntry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntry(event.target.value);
  };

  const handleUpdate = () => {
    if (entry !== ""){
      entryEdit.editCurrent({entry: entry, type: typeOf, id:entryEdit.id});
      setOpen(false);
    } else {alert("Campo no puede ser vacio")}
  };  

  return (
    <div className="edit-btn">
        <Button
        variant="text" 
        color="default" 
        onClick={handleClickOpen}
        startIcon={<EditIcon/>}
        > 
        </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-body">Editar</DialogTitle>
        <DialogContent>
          <TextField
            className="multiline-input"
            defaultValue={entryEdit.entry}
            variant="outlined"
            multiline
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            onChange={handleChangeEntry}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancelar
          </Button>
          <Button onClick={handleUpdate} className={classes.addBtn}>
            Actualizar
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