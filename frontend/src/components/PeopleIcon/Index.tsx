import React from "react";
import { useSignUps } from "sessions";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";


export const PeopleIcon = ({ id }: any) => {



  return (
    <>
      <PeopleAltIcon />
    <p>{id}</p>
    </>
  );
};
