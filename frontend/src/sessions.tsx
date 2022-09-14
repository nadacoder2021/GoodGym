import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const QUERY = gql`
  query {
    sessions{
    id
    title
    strapline
    image
    startTime
    __typename
    } 
  }
`;



const QUERYSESSION = gql`
query getSessions($sessionId: ID!) {
 session (id:$sessionId){
    id
    title
    signups {
      id
      name
    }
  }
    }`



export const useSession = () => {
  const { data } = useQuery(QUERY);
  console.log("AllSessions", data?.sessions)
  return { sessions: data?.sessions };

};
// type MutationFunction = (sessionId: number) => {};

export const use1Session = (sessionId: number) => {
  const {data} = useQuery(QUERYSESSION, {
    variables: {sessionId:sessionId}
  });
  return {session: data}
}
