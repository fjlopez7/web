import React from "react";
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { clientPlaybooks } from '../graphql/Client';
import {  useQuery, useMutation } from '@apollo/client';
import { GET_ALL_PLAYS } from '../graphql/PlaysMutations';
import { CREATE_PLAYBOOK } from '../graphql/PlaybookMutations';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

interface Play {
    id: string;
    title: string;
    gitId: string;
}
export const NewPlaybook = () => {
    let history = useHistory();
    const classes = useStyles();
    const [title, setTitle] = React.useState('');
    const [units, setUnits] = React.useState<string[]>([]);
    const [plays, setPlays] = React.useState<string[]>([]);
    const [keywords, setKeywords] = React.useState<string[]>([]);
    const [actualKey, setActualKey] = React.useState('');
    const [actualPlay, setActualPlay] = React.useState('');
    const [actualUnit, setActualUnit] = React.useState('');
    const userId = useSelector((state: any) => {
        return state.user.userId
    });
    const [addPlaybookMutation] = useMutation(CREATE_PLAYBOOK,  {
        client: clientPlaybooks,
      }
    );

    const deleteKey = (i: number) => {
        let keys = keywords
        keys.splice(i,1)
        setKeywords(keys)
     
    } 
    const deletePlay = (i: number) => {
        let plays1 = plays
        let units1 = units
        plays1.splice(i,1)
        units1.splice(i,1)
        setPlays(plays1)
        setUnits(units1)
        
     
    } 
    const addPlay = () => {
        if (actualPlay!== '' && actualPlay!== 'Select'){
            let plays1 = plays
            let units1= units
            plays1.push(actualPlay)
            units1.push(actualUnit)
            setPlays(plays1)
            setUnits(units1)
            setActualPlay('')
            setActualUnit('')
        }
    }
    const addKey = () => {
        if (actualKey.length > 0){
            let keys = keywords
            keys.push(actualKey)
            setKeywords(keys)
            setActualKey('')
        }
    }
    const setPlay = (e: any) => {
        const play = e.split(",")
        setActualPlay(play[0])
        setActualUnit(play[1])

    }
    const handleSubmit = (e: any) =>{
        e.preventDefault()
        if (title === ''){
            alert('Debe ingresar un nombre para el playbook')
        } else if (keywords.length === 0){
            alert('Debe ingresar al menos una key word')
        } else if (units.length === 0 || units.length === 1){
            alert('El plabook debe estar conformado por almenos 2 plays')
        } else {
            addPlaybookMutation({
                variables: {title: title, units: units, keywords: keywords, creator: userId } 
            }).then(response => {
                setTitle('')
                setUnits([])
                setPlays([])
                setKeywords([])
                setActualKey('')
                setActualPlay('')
                setActualUnit('')
                history.push("/playbooks")

            }).catch(err =>{
               alert(err.message)  
            })
        }
    }

    const { loading, error, data } = useQuery(GET_ALL_PLAYS, {
        client: clientPlaybooks,
      });
    if (loading) {
        return(
          <>
          <h2>Cargando Plays...</h2>
          </>
        )
      }
    if (error) {
      return(
        <>
        {error}
        </>
      )
    }    

    
    return (
        <>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <h1> Crear Playbook </h1>
        <div className={classes.container}>
        <h2> Titulo </h2>
        <TextField  className="input" value={title} label="Nombre Playbook" onChange={e => setTitle(e.target.value)}></TextField>
        <h2> Keywords  </h2>
        {keywords && (
            keywords.map((keyword, i)=>{
                return(
                    <>
                    <Grid item key={i}> 
                        <Card className={classes.root1}>
                            <div className={classes.content}>
                                <Typography className={classes.title}>
                                    {keyword}
                                </Typography>
                                <IconButton aria-label="delete"  onClick={()=>deleteKey(i)}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        
                        </Card>
                    </Grid>
                    </>
                )
            })
        )}
        <TextField  value={actualKey} className="input" label="Key:" onChange={e => setActualKey(e.target.value)} onBlur={() => {addKey()}}></TextField>  
        <h2> Plays</h2>
        {plays && (
            plays.map((play, i) => {
                return(
                    <>
                    <Grid item key={i}> 
                        <Card className={classes.root}>
                            <div className={classes.content}>
                                <Typography className = {classes.title} gutterBottom variant="h5" component="h2">
                                    {play}
                                </Typography>
                                <IconButton aria-label="delete" onClick={()=>deletePlay(i)}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                           
                        </Card>
                    </Grid>
                    </>
                )
            })
        )}
        <InputLabel htmlFor="age-native-simple">Play:</InputLabel>
        <Select 
          className={classes.selected}
          native
          onChange={(e)=>setPlay(e.target.value)}
          onBlur={() => {addPlay()}}
        >
          <option aria-label="None" value={["Select", "0"]} />
            {data.getAllPlays.map((play: Play, i:number) => 
                <option key={i} value={[play.title, play.id]} >{play.title}</option>
            )}
        </Select>
        <div>
            <Button variant="contained" type="submit" className={classes.submit}>
                Crear
            </Button>
        </div>
        </div>
        
        </form>



        </>	
    );
  };

  const useStyles = makeStyles((theme) => ({
    selected:  {
      width: 200,
    },
    h2: {
      marginBottom: 10,
      marginTop: 10,
    },
    root1: {
      zIndex: 0,
      marginTop: 10,
      marginBottom: 10,
      width: 200,
      height: 60,

    },
    root: {
        zIndex: 0,
        marginTop: 10,
        marginBottom: 10,
        width: 500,
        height: 60,
  
      },
    title: {
      fontSize: 17,
      fontWeight: 600,
    },
  
    content:{
      display: 'flex',
      justifyContent: 'space-between',
      margin: 10,
    },
    right: {
      float: 'right',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    submit: {
        marginTop: 10,
        paddingLeft:0,
        border: 'solid 1px',
        backgroundColor: '#4db977',
        color: 'white',
    },
    container: {
    
     marginLeft: 30,
    }

  }));