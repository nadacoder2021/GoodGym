import React, { useState, useEffect } from "react";
import { useAuth } from "auth";
import { useSession } from "sessions";
import { Cards } from "components/Navbar/Cards";

// Styling Main Div
const styles = {
  container: {
  },
};

const Solution = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [allSessions, setAllSessions] = useState("");

  //The current user is logged in
  const { user } = useAuth();

  //Re-render the page every time user is changed
  useEffect(() => setCurrentUser(user), [user]);

  //Get all the sessions and re-render when sessions are updated
  const { sessions } = useSession();
  useEffect(() => setAllSessions(sessions), [sessions]);

  // If user is not logged in
  if (!user) return <p>Please sign in or register</p>;

  // If there are no sessions
  if (!sessions) return <p>Data hasn't arrived yet</p>;

  return (
    <div style={styles.container as React.CSSProperties}>
      <Cards sessions={sessions} />
    </div>
  );
};

export default Solution;
