import { ApolloServer } from "apollo-server";
import { GraphQLScalarType, Kind } from "graphql";
import { upcomingSessions } from "./data";
import { typeDefs } from "./schema";
import * as resolvers from "./resolvers";

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("Module disposed. "));
}

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Session: {
      attendees: (session) => resolvers.attendees(session.id),
    },
    Query: {
      session: (_obj, args, _ctx) => resolvers.session(args.id),
      upcomingSessions: () => upcomingSessions,
    },
    Mutation: {
      register: (_obj, args, _ctx) =>
        resolvers.register(args.sessionId, args.userId),
      unregister: (_obj, args, _ctx) =>
        resolvers.unregister(args.sessionId, args.userId),
    },
    Date: new GraphQLScalarType({
      name: "Date",
      description: "Date custom scalar type",
      parseValue(value) {
        return new Date(parseInt(value));
      },
      serialize(value) {
        return value.getTime().toString();
      },
      parseLiteral(ast) {
        return ast.kind === Kind.STRING ? new Date(parseInt(ast.value)) : null;
      },
    }),
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
