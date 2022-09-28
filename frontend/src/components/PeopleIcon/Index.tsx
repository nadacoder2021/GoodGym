import React from "react";
import { useSignUps } from "sessions";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";


export const PeopleIcon = ({ id }: any) => {
  const {signUps} = useSignUps()
  console.log("people icon sign ups", signUps)

  return (
    <>
      <PeopleAltIcon />
    <p>{id}</p>
    </>
  );
};
