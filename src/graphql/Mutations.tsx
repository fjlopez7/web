import { gql } from '@apollo/client';

export const SIGN_UP= gql`
    mutation createUser(
        $email: String!,
        $password: String!,
        $confirmPassword: String!
        $name: String!) {
        signup(name: $name, email: $email, password: $password, confirmPassword: $confirmPassword) {
        id, token, email, name, role
        }
    }
`;

export const SIGN_IN= gql`
    mutation createSession(
        $email: String!,
        $password: String!,
        ) {
        login(email: $email, password: $password) {
        id, token, email, name, role
        }
    }
`;
