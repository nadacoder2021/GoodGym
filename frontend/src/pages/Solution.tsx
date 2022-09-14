import React, { useState, useEffect } from "react";
import { useAuth } from "auth";
import { use1Session, useSession } from "sessions";
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Unstable_Grid2";
import { Cards } from "components/Navbar/Cards";

//Styling Main Div
const styles = {
  container: {
    backgroundColor: "blue",
    fontWeight: "bold",
  },
};

const Solution = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [allSessions, setAllSessions] = useState("");

  //THE CURRENT USER LOGGED IN
  const { user } = useAuth();

  //Re-render the page every time user is changed
  useEffect(() => setCurrentUser(user), [user]);

  //GET THE SESSIONS
  const { sessions } = useSession();
  useEffect(() => setAllSessions(sessions), [sessions]);

  // //GET THE INDIVIDUAL SESSIONS
  // const { session } = use1Session(sessionId);
  // console.log("One session", session)

  // IF CURRENT USER NOT LOGGED IN
  if (!user) return <p>Please sign in or register</p>;

  if (!sessions) return <p>Data hasn't arrived yet</p>;

  return (
    <div style={styles.container as React.CSSProperties}>
      <Cards sessions={sessions} />
    </div>
  );
};

export default Solution;
