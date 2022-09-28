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
    signups{
      name
    }
    } 
  }
`;
const SIGNUPS = gql`
query sessions{
  sessions{
    signups{
      name
    }
  }
}

`


export const useSignUps = () => {
  const {data, refetch} = useQuery(SIGNUPS);
  return { signUps: data?.sessions, refetch}
}

export const useSession = () => {
  const { data } = useQuery(QUERY);
  return { sessions: data?.sessions };

};

