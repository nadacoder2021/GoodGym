import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const QUERY = gql`
  query CurrentUser {
    currentUser {
      id
      name
      avatar
    }
  }
`;

export const useAuth = () => {
  const { data } = useQuery(QUERY);
  return { user: data?.currentUser };
};
