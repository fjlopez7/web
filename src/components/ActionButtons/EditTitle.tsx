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
  type: string;
  id: number;
  editCurrent: any;
}

export default function EditTitle(entryEdit: EntryEdit) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(entryEdit.entry);
  const [typeOfTitle, setType] = React.useState(entryEdit.type);

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

  const handleUpdate = () => {
    if (title !== ""){
      entryEdit.editCurrent({entry: title, type: typeOfTitle, id:entryEdit.id});
      setOpen(false);
    } else {alert("Campo no puede ser vacio")}
  }; 

  return (
    <div>
        <Button
        variant="text" 
        color="default" 
        onClick={handleClickOpen}
        startIcon={<EditIcon/>}
        > 
        </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <select className="select-text" id="current-select" onChange={handleChangeType}>
            <option value="Titulo" selected>Titulo</option>
            <option value="Subtitulo 1">Subtitulo 1</option>
            <option value="Subtitulo 2">Subtitulo 2</option>
          </select>
          <TextField
            defaultValue={entryEdit.entry}
            onChange={handleChangeTitle}
            variant="outlined"
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
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