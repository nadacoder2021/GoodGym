import React, { useEffect, useState } from "react";
import { useRegister, useUnRegister } from "mutations";
import Button from "@mui/material/Button";

export const RegisterButton = ({ el }: any) => {
  const [registered, setRegistered] = useState(!false);
  const [sessionId, setSessionId] = useState(0);
  const { registerUser, registerUserData } = useRegister(sessionId);
  const { unregisterUser } = useUnRegister(sessionId);

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
    setSessionId(buttonId);
    setRegistered(false);
  };

  const onClickUnRegister = (Event: React.MouseEvent<HTMLButtonElement>) => {
    Event.preventDefault();
    const buttonId = parseInt(
      Event.currentTarget.getAttribute("value") as string
    );
    setSessionId(buttonId);
    unregisterUser();
    setRegistered(!false);
  };

  return (
    <>
      {registered ? (
        <Button
          sx={{ marginInline: 3 }}
          variant="contained"
          value={el}
          onClick={onClickRegister}
        >
          Register
        </Button>
      ) : (
        <Button
          sx={{ marginInline: 3 }}
          variant="contained"
          value={el}
          onClick={onClickUnRegister}
        >
          UnRegister
        </Button>
      )}
    </>
  );
};
