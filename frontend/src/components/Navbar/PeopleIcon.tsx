import React, { useState, useEffect } from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { use1Session } from "sessions";

export const PeopleIcon = ({ id }: any) => {
  const [session1, setSession1] = useState()
  const [sessionId, setSessionId] = useState(1)
   
  const { session } = use1Session(sessionId);
  useEffect(()=> setSessionId(id), [id])

  
 
  console.log("1 session", session.session);
  
  return (
    <>
      <PeopleAltIcon />
      {session ? <p></p> : <p></p>}
    </>
  );
};
