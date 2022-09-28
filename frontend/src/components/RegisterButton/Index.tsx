import React, { useEffect, useState, useContext } from "react";
import { UpdatingSessions } from "pages/Solution";
import { useRegister, useUnRegister } from "mutations";
import { useSession } from "sessions";
import Button from "@mui/material/Button";
import { SessionContextType } from "pages/Solution";
import { useSignUps } from "sessions";




export const RegisterButton = ({ buttonId }: any, { onChange }: any) => {
  const [registered, setRegistered] = useState(false);
  const [sessionId, setSessionId] = useState(0);
  

  //Accessing the states of parent component using useContext
  const {setAllSessions} = useContext<SessionContextType>(UpdatingSessions)
  const { registerUser } = useRegister(sessionId);
  const { unregisterUser } = useUnRegister(sessionId);

  const {sessions} = useSession()
  const {refetch} = useSignUps()
 
 
  useEffect(() => {
    if (sessionId !== 0) {
      registerUser();
    }
  }, [registerUser, sessionId]);

  const onClickRegister = (Event: React.MouseEvent<HTMLButtonElement>) => {
    Event.preventDefault();
    const buttonId = parseInt(
      Event.currentTarget.getAttribute("value") as string
    );
    console.log("this is the button Id clicked", buttonId);
    setSessionId(buttonId);
    registerUser();
    setRegistered(!registered);
    setAllSessions(sessions)
    refetch()
    console.log("array when registered", sessions)
  };

  const onClickUnRegister = (Event: React.MouseEvent<HTMLButtonElement>) => {
    Event.preventDefault();
    const buttonId = parseInt(
      Event.currentTarget.getAttribute("value") as string
    );
    setSessionId(buttonId);
    unregisterUser();
    setRegistered(!registered);
    setAllSessions(sessions)
    refetch()
    console.log("array when unregistered", sessions)
  };

  return (
    <>
      {registered ? (
        <Button
          sx={{ marginInline: 2, minWidth: 94 }}
          variant="contained"
          value={buttonId}
          onClick={onClickUnRegister}
        >
          UnRegister
        </Button>
      ) : (
        <Button
          sx={{ marginInline: 2, minWidth: 80 }}
          variant="contained"
          value={buttonId}
          onClick={onClickRegister}
        >
          Register
        </Button>
      )}
    </>
  );
};
