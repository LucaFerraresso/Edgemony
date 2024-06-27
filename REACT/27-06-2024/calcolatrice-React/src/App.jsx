import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Counter/Counter";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Main />

      <Counter />

      <Footer />
    </>
  );
}

export default App;
