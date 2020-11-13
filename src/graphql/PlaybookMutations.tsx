import { gql } from '@apollo/client';

export const GET_ALL_PLAYBOOKS = gql`
    query getAllPlaybooks{
        getAllPlaybooks{
            id
            title
            units
            keywords
        }
      }
`

export const GET_PLAYBOOK_ID = gql`
    query getPlaybookById(
        $id: String!,
        ) {
        getPlaybookById(id: $id){
            id, title, units, keywords
        }
    }
`
export const CREATE_PLAYBOOK = gql`
    mutation addPlaybook(
        $title: String!, 
        $units: [String!], 
        $keywords: [String!], 
        $creator: String,
        ){
        addPlaybook(title: $title, units: $units, keywords: $keywords, creator: $creator){
            message
        }
    }
`
export const EDIT_PLAYBOOK = gql`
    mutation editPlaybook(
        $id: String!,
        $title: String!, 
        $units: [String!], 
        $keywords: [String!], 
        $creator: String,
        ){
        editPlaybook(id: $id, title: $title, units: $units, keywords: $keywords, creator: $creator){
            message
        }
    }
`
