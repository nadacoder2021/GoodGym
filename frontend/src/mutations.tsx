import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const REGISTER_USER = gql`
  mutation registerUser($sessionId: ID!) {
    register(sessionId: $sessionId) {
      id
      user {
        name
      }
      session {
        id
      }
    }
  }
`;
export const useRegister = (sessionId: number | null) => {
  const [registerUser,  {error, data}]  = useMutation(REGISTER_USER, { variables: { sessionId: sessionId } })
  return { registerUserData: data, error: error, registerUser: registerUser };
};

// Unregister the current user
const UNREGISTER_USER = gql`
  mutation unregisterUser($sessionId: ID!) {
    unregister(sessionId: $sessionId)
  }
`;

// //Hooks to call the Mutation
export const useUnRegister = (sessionId: number) => {
    const [unregisterUser,  {error, data}]  = useMutation(UNREGISTER_USER, { variables: { sessionId: sessionId } })
    return { returnedData: data, errors: error, unregisterUser: unregisterUser };
  };