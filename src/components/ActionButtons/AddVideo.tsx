import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import MovieIcon from '@material-ui/icons/Movie';
import { Tooltip } from '@material-ui/core';



export default function AddVideo() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setOpen(false);
  }; 

  return (
    <div>
      <Tooltip title="Añadir Video">
        <Button
        className={classes.addBtn}
        variant="text" 
        onClick={handleClickOpen}
        startIcon={<MovieIcon/>}
        > 
        </Button>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Añadir Video</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancelar
          </Button>
          <Button onClick={handleAdd} className={classes.addBtn}>
            Subir
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