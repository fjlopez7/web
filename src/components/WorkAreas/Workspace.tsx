import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import AddTitle from '../ActionButtons/AddTitle';
import AddBody from '../ActionButtons/AddBody';
import AddCode from '../ActionButtons/AddCode';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EntryField from './EntryField';

interface Entry {
    entry: string;
    type: string;
    id: number;
}

function Workspace(props: any) {
    const classes = useStyles();
    let list: Entry[] = []; 
    let counter: number = 0;
    const [state, setState] = React.useState(list);
    const [content, setContent] = React.useState(``);

    React.useEffect(() => {
        localStorage.setItem("myMarkdown", content);
        }
        , [content]);

    const handleDelete = (id: number) => {
        let actualValues: Entry[] = state;
        let entryIndex: number = actualValues.findIndex(element => element.id === id);
        if (entryIndex !== -1) {
            actualValues.splice(entryIndex, 1);
            setState(actualValues);
            stateToContent();
            renderInputs();
        }        
    };

    const handleAdd = (entry: Entry) => {
        if (state) {
            let actualValues: Entry[] = state;
            actualValues.push({
                entry: entry.entry,
                type: entry.type,
                id: counter
            })
            setState(actualValues);
            counter++;
            stateToContent();
            renderInputs();
        }
    }

    const handleEdit = (entry: Entry) => {
        let actualValues: Entry[] = state;
        let entryIndex: number = actualValues.findIndex(element => element.id === entry.id);
        if (entryIndex !== -1) {
            let current: Entry; 
            current = actualValues[entryIndex];
            current.entry = entry.entry;
            current.type = entry.type;
            actualValues.splice(entryIndex, 1, current);
            setState(actualValues);
            stateToContent();
            renderInputs();
        }
    };

    const renderInputs = () => {
        ReactDOM.render(state.map(entry => 
            <EntryField entry={entry.entry} type={entry.type} id={entry.id} deleteCurrent={handleDelete} editCurrent={handleEdit}/> 
            ), document.getElementById('editor'));
    };

    const handlePreview = (event: any) => {
        event.preventDefault();
        props.changeContent(content);
    }; 

    const stateToContent = () => {
        let newLine: string = '\n';
        let newTitle: string = '# ';
        let newSubtitle1: string = '### ';
        let newSubtitle2: string = '##### ';
        let newCode: string = '````';
        let finishCode: string = '````';
        let toContent: string = '';
        if(state){
            for (let i:number = 0; i < state.length ;i++){
                let current: Entry = state[i];
                if (current.type === "Titulo"){
                    toContent = toContent + newTitle + current.entry + newLine
                } else if(current.type === "Subtitulo 1"){
                    toContent = toContent + newSubtitle1 + current.entry + newLine
                } else if (current.type === "Subtitulo 2"){
                    toContent = toContent + newSubtitle2 + current.entry + newLine
                } else if (current.type === "Cuerpo"){
                    toContent = toContent + current.entry + newLine
                } else if (current.type === "Codigo"){
                    toContent = toContent + newCode + newLine + current.entry + newLine + finishCode + newLine
                };
            }
            setContent(toContent);
        }
    };

    return (
      <div className={classes.outerdisplayWrapper}>
            <div className={classes.topSection}>
                <h3 className="display-title">
                    Workspace
                </h3>
                <div className={classes.buttonsSection}>
                    <AddTitle addEntry={handleAdd}/>
                    <AddBody addEntry={handleAdd}/>
                    <AddCode addEntry={handleAdd}/>
                    <Button
                        onClick={handlePreview}
                        variant="contained" 
                        className={classes.addBtn} 
                        startIcon={<VisibilityIcon/>}
                    >
                        Preview
                    </Button>
                </div>
            </div>
            <div className={classes.editorWrapper} id="editor">

            </div>
        </div>	
    );
  };

const useStyles = makeStyles({
    addBtn: {
        color: 'white',
        background: '#924f96',
        '&:hover': {
            background: '#924f96',
            color: 'black',
        }, 
    },
    editorWrapper: {
        overflowY: 'scroll',
        marginTop: '20px',
    },
    outerdisplayWrapper: {
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100%',
    },
    topSection: {
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.8rem',
        padding: '0 1rem',
        height: '2.5rem',
        width: '100%',
    },
    buttonsSection: {
        display: 'flex',
        alignItems: 'stretch',
    }
});

export default Workspace;



