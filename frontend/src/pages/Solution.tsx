import React from "react";
import { useAuth } from "auth";

const Solution = () => {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <React.Fragment>
      Hello, {user.name}. Upcoming sessions will show here.
    </React.Fragment>
  );
};

export default Solution;
