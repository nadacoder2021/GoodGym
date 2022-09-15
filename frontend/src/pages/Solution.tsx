import React, { useState, useEffect } from "react";
import { useAuth } from "auth";
import { useSession } from "sessions";
import { Cards } from "components/Cards/Index";
import { Header } from "components/Header/index";

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
  if (!user) return <h2>Please sign in or register</h2>;

  // If there are no sessions
  if (!sessions) return <h4>Please wait. Loading...</h4>;

  return (
    <div>
      <Header />
      <Cards sessions={sessions} />
    </div>
  );
};

export default Solution;
