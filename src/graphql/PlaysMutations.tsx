import { gql } from '@apollo/client';

export const GET_PLAY_ID = gql`
    query getPlayById (
        $id: String!,
        ) {
        getPlayById(id: $id){
            id, file, version
        }
    }
`

export const GET_ALL_PLAYS = gql`
    query getAllPlays{
        getAllPlays{
            id
            title
            gitId
            keywords
            collaborators{name}
        }
      }
`
export const GET_PLAY_DATA = gql`
    query getPlayData(
        $id: String!,
    ){
        getPlayData(
            id: $id
        ){
            id
            title
            gitId
            keywords
            version
        }
      }
`

export const ADD_PLAY = gql`
    mutation addPlay(
        $file: String!
        $title: String!
        $version: String!
        $collaborators: [inputCollaborator!]!
        $keywords: [String]!
        $gitId: String
        $pathmd: String
        ){
            addPlay(file: $file, title: $title, version: $version, 
                collaborators: $collaborators, keywords: $keywords, gitId: $gitId, pathmd: $pathmd){
                    message
                }
        }
`