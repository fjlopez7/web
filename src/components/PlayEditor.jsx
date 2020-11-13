import React from 'react';
import Split from 'react-split';
import { makeStyles } from '@material-ui/core/styles';
import Workspace from './WorkAreas/Workspace';
import PreviewMarkdown from './WorkAreas/PreviewMarkdown';

export default function PlayEditor() {
    const classes = useStyles();
    localStorage.setItem("myMarkdown", ``);
    let markdown = localStorage.getItem("myMarkdown");
    const [markDown, setMarkDown] = React.useState(markdown);

    return (
        <div className={classes.outerWrapper}>
            <Split        
            className={classes.workareaSplit}
            sizes={[50, 50]}
            minSize={300}
            expandToMin={true}
            gutterAlign="center"
            direction="horizontal"> 
                <Workspace changeContent={setMarkDown}/>
                <PreviewMarkdown content={markDown}/>
            </Split>
        </div>	
    );
  };


const useStyles = makeStyles({
    outerWrapper: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    workareaSplit: {
        width: '100%',
        height: '100%',
        display: 'flex',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.24)',
    }
});
