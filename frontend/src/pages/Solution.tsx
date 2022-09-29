import React, { useState, useEffect, Dispatch } from "react";
import { useAuth } from "auth";
import { useSession } from "sessions";
import { Cards } from "components/Cards/Index";
import { Header } from "components/Header/index";
import { createContext } from "react";

// using useContext hook to make state available to all child components rather than passing down props 
export interface SessionContextType{
  allSessions: [] | null;
  setAllSessions: Dispatch<any>}

  const initialState ={
    allSessions: null,
    setAllSessions: () => null
  }

 export const UpdatingSessions :any = createContext<SessionContextType>(initialState);

const Solution = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [allSessions, setAllSessions] = useState({});
  const [registration, setRegistration] = useState(false)

  //The current user is logged in
  const { user } = useAuth();

  //Get all the sessions and re-render when sessions are updated
  const { sessions } = useSession();

  // If user is not logged in
  if (!user) return <h4>Please sign in or register</h4>;

  // If there are no sessions
  if (!sessions) return <h4>Please wait. Loading...</h4>;

  //Pass down the state
  const value = { allSessions, setAllSessions };


  return (
    <UpdatingSessions.Provider value={value}>
      <div>
        <Header />
        <Cards sessions={sessions} />
      </div>
    </UpdatingSessions.Provider>
  );
};

export default Solution;
