import "./App.css";

import "./CSS/layout.css";
import "./CSS/mediaquery.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";

//import posts from "./data.json";
//console.log(posts);

function App() {
  return (
    <>
      <Header class="header">Edgemony</Header>
      <Main class="main">articles</Main>
      <Footer class="footer">LINK UTILI</Footer>
    </>
  );
}

export default App;
