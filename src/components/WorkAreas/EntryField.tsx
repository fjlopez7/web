import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EditTitle from '../ActionButtons/EditTitle';
import EditBody from '../ActionButtons/EditBody';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ClearIcon from '@material-ui/icons/Clear';

interface EntryField {
    entry: string;
    type: string;
    id: number;
    deleteCurrent: any;
    editCurrent: any;
}

const EntryField = (entryInput: EntryField) => {
    const classes = useStyles();

    const handleDelete = () => {
        entryInput.deleteCurrent(entryInput.id);
    };

    const editor = () =>
    {
        if (entryInput.type === "Cuerpo"){
           return <EditBody
                entry={entryInput.entry} id={entryInput.id} editCurrent={entryInput.editCurrent}/> 
        } else if (entryInput.type === "Imagen" || entryInput.type === "Video" || entryInput.type === "Codigo") {
            return null;
        } else {
            return <EditTitle
                entry={entryInput.entry} type={entryInput.type} id={entryInput.id} editCurrent={entryInput.editCurrent}/> 
        }
    };

    return(
    <div>
    <Card className={classes.entry}>
        <CardActions>
            <Button
            onClick={handleDelete}
            variant="text" 
            color="default" 
            startIcon={<ClearIcon/>}
            >
            </Button>
            {editor()}
        </CardActions>
        <CardContent>
            <p className={classes.entryType}>{entryInput.type}</p>
            <p>{entryInput.entry}</p>
    </CardContent>
    </Card>
    </div>
    );
}

const useStyles = makeStyles({
    entry: {
        marginTop: '10px',
        display: 'flex',
        alignItems: 'stretch',
    },
    entryType: {
        fontStyle: 'italic',
        color: '#924f96',
        fontSize: 'small',
    }
});

export default EntryField;