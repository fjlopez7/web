import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CreatePlay from '../ActionButtons/CreatePlay';
import { Marked } from '@ts-stack/markdown';

export default function PreviewMD(props: any) {
    const classes = useStyles();
    const [html, setHtml] = React.useState(getHtml(props.content));

    React.useEffect(() => {
        setHtml(getHtml(props.content));
      }, [props.content]);

    return (
      <div className={classes.outerdisplayWrapper}>
            <div className={classes.topSection}>
                <h3 className="displayTitle">
                    Play
                </h3>
                <div className={classes.buttonsSection}>
                    <CreatePlay play={props.content}/>
                </div>
            </div>
            <div className={classes.editorWrapper}>
            <Card className={classes.entry}>
                    <CardContent>
                        <div 
                        className="body-entry"
                        dangerouslySetInnerHTML={{ __html: html }}>
                        </div>   
                    </CardContent>
                </Card>
            </div> 
        </div>	
    );
  };

  const getHtml = (markdown: any) => {
    return Marked.parse(markdown);
  };

  const useStyles = makeStyles({
    addBtn: {
    color: 'white',
    background: '#4db977',
    },
    editorWrapper:{
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
    },
    entry: {
      marginTop: '10px',
      display: 'flex',
      alignItems: 'stretch',
    }
});