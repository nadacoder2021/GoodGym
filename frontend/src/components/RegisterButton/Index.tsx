import React, { useEffect, useState } from "react";
import { useRegister, useUnRegister } from "mutations";
import { useSession } from "sessions";
import { useAuth } from "auth";
import Button from "@mui/material/Button";
import { useSignUps } from "sessions";

export const RegisterButton = ({ buttonId }: any, { onChange }: any) => {
  const [registered, setRegistered] = useState(false);
  const [sessionId, setSessionId] = useState(0);

  const { registerUser } = useRegister(sessionId);
  const { unregisterUser } = useUnRegister(sessionId);
  const {user}  = useAuth()
  const { sessions } = useSession();
  const { refetch, signUps } = useSignUps();
console.log(signUps)
//  const findName = signUps

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
    refetch();
    console.log("array when registered", sessions);
  };

  const onClickUnRegister = (Event: React.MouseEvent<HTMLButtonElement>) => {
    Event.preventDefault();
    const buttonId = parseInt(
      Event.currentTarget.getAttribute("value") as string
    );
    setSessionId(buttonId);
    unregisterUser();
    setRegistered(!registered);
    refetch();
    console.log("array when unregistered", sessions);
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
