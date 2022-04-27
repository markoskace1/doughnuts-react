import React, { StrictMode } from "react";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <StrictMode>
      <Navbar />
      <Aside />
      <Main />
      <Footer />
    </StrictMode>
  );
}

export default App;
