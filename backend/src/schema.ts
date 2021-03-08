import { gql } from "apollo-server";
export const typeDefs = gql`
  # dates are returned as a stringified number of milliseconds since the unix epoch
  scalar Date

  type Session {
    id: ID!
    title: String!
    strapline: String!
    description: String!
    image: String!
    startTime: Date!
    attendees: [ID!]!
  }

  type Query {
    session(id: ID!): Session!
    upcomingSessions: [Session!]!
  }

  type Mutation {
    register(sessionId: ID!, userId: ID!): Session!
    unregister(sessionId: ID!, userId: ID!): Session!
  }
`;
