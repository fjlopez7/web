import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { clientPlaybooks } from '../graphql/Client';
import { GET_PLAY_ID } from '../graphql/PlaysMutations'
import { useQuery } from '@apollo/client';
import { decode } from 'js-base64';
import styled from "styled-components";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const Play = (props: any) => {
    const classes = useStyles();
    const {loading, error, data} = useQuery(GET_PLAY_ID, {
        client: clientPlaybooks,
        variables: { id: props.match.params.id }
      });
    const [version, setVersion] = useState('')
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setVersion(event.target.value as string);
      };
    
      if (loading) {
          return (
              <>
                Cargando información...
              </>
          )
      }
      if (error) {
        return (
            <>
              {error}
            </>
        )
    }
    return (
        <>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Versión:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={version}
          onChange={handleChange}
        >
          <MenuItem value={data.getPlayById.version}>{data.getPlayById.version}</MenuItem>
        </Select>
      </FormControl>
        <MarkdownStyles>
            <ReactMarkdown>
                {decode(data.getPlayById.file)}
            </ReactMarkdown>
        </MarkdownStyles>    
        </>
    )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      position: 'absolute',
      top: 100,
      right: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const MarkdownStyles= styled.div`
    & > h1 {
        color: #4BB185;
        margin: 15px;
        text-align: center
    },
    & > h2 {
        color: #49A992;
        margin: 15px;
    },
    & > h3 {
        color: #4BB185;
        margin: 15px;
    },
    & > h4 {
        color: #4BB185;
        margin: 15px;
    },
    & > h5 {
        color: #4BB185;
        margin: 15px;
    },
    & > h6 {
        color: #4BB185;
        margin: 15px;
    },
    & > p {
        color: #555555;
        margin: 10px;
        text-align: left;
        img {
            border: solid black 1px;
            display: block;
            margin: 15px;
            margin-left: auto;
            margin-right: auto;
            width: 170px;
            height: 150px;
        }
    },
    & > ul {
        margin: 15px;
    },
    & {
        width: 80%;
        padding: 10px;
        margin: auto;
        border: solid 1px #E7ECEF
    },

`