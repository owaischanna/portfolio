import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./Header.jsx";
import Header from "./Header.jsx";
import Expertise from "./Expertise.jsx";
import Portfolio from "./Portfolio.jsx";
import ContactForm from "./ContactForm.jsx";
import Team from "./Team.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Expertise></Expertise>
      <Portfolio></Portfolio>
      {/* <Team></Team> */}
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}

export default App;
