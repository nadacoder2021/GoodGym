import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as UI from "@mui/material";

import Readme from "./pages/Readme";
import Solution from "./pages/Solution";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <UI.Container>
          <UI.Box py={2} textAlign="center">
            <UI.Typography variant="h4" component="h1">
              GoodGym Developer Exercise
            </UI.Typography>
          </UI.Box>

          <UI.Box mt={1} mb={2} textAlign="center">
            <UI.Link href="/">Readme</UI.Link> |{" "}
            <UI.Link href="/solution">Solution</UI.Link>
          </UI.Box>

          <Routes>
            <Route path="/" element={<Readme />} />
            <Route path="/solution" element={<Solution />} />
          </Routes>
        </UI.Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
