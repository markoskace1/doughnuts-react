import React, { StrictMode } from "react";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <StrictMode>
      <Navbar />
      <Aside />
      <Main />
    </StrictMode>
    // attribution: <a href='https://www.freepik.com/vectors/sweet-bakery'>Sweet bakery vector created by smithytomy - www.freepik.com</a>
  );
}

export default App;
