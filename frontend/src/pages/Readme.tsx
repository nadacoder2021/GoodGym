import React from "react";
import * as UI from "@material-ui/core";
import { useAuth } from "auth";

const Readme = () => {
  const { user } = useAuth();
  return (
    <React.Fragment>
      <UI.Box>
        <UI.Typography>
          This project skeleton includes a{" "}
          <a href="http://localhost:4000" target="_blank" rel="noreferrer">
            mock GraphQL server
          </a>{" "}
          which allows you to query for upcoming sessions, as well as to
          register and unregister for them.
        </UI.Typography>
        <UI.Typography>
          The frontend is "logged in" as a mock user "GoodGymRunner" which you
          can access with the dummy hook `useAuth`:
        </UI.Typography>
        <pre>{JSON.stringify(user, null, 1)}</pre>
      </UI.Box>

      <UI.Box pt={1}>
        <UI.Typography variant="h5" component="h2">
          Your challenge
        </UI.Typography>
      </UI.Box>
      <ol>
        <li>
          Query the GraphQL endpoint for `upcomingSessions` and display the
          results. Present them in a way that both looks nice and gets across
          the key information clearly.
        </li>
        <li>
          For each result, show the number of people registered as attending.
        </li>
        <li>
          Add functionality that allows the current (mock) user to register and
          unregister for a session, using the `register` and `unregister`
          mutations. Show on each result whether the current user is registered.
        </li>
        <li>
          If you have time, add some client-side filtering and/or sorting: this
          could be e.g. a text search, or a filter on date.
        </li>
      </ol>
      <UI.Box pt={1}>
        <UI.Typography variant="h5" component="h2">
          Notes
        </UI.Typography>
      </UI.Box>
      <ul>
        <li>
          We've set up a page component for you to use:
          `src/pages/Solution.tsx`.
        </li>
        <li>Install any additional node modules you like.</li>
        <li>
          We've included Material-UI, but you can use an alternative if you
          prefer.
        </li>
        <li>
          Similarly, we've included Apollo client, but you can use an
          alternative if you prefer.
        </li>
        <li>
          You don't need to follow the existing code conventions in this
          project. Part of your role will be setting the conventions we use, so
          write code as you like it to be written.
        </li>
        <li>
          We're interested in how you structure, test, and style your code and
          components.
        </li>
        <li>
          Once you've added some GraphQL queries and/or mutations, you can
          generate types for them using `yarn graphql:generate` in the
          `frontend` folder.
        </li>
        <li>
          Datetimes are returned as a stringified number of milliseconds since
          the unix epoch.
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Readme;
