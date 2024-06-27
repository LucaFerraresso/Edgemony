import "./Main.css";
import { useState } from "react";
import DATA from "./../../DATA.json";

function Main(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <Display valore={count} />
      {/*aggiungo un attributo VALORE= valore del count per poterlo visualizzare*/}
      {/*l'idea sarebbe che al click, il valore = al children del bottone */}
      <div className="tastierino">
        {DATA.map((DATA) => (
          <Button key={DATA.id} label={DATA.label}></Button>
        ))}
      </div>
    </div>
  );
}

function Display(props) {
  const { valore } = props;

  return (
    <div className="schermoCalcolatrice">
      <span>{valore}</span>
    </div>
  );
}

function Button(props) {
  const { label } = props;
  return <button>{label}</button>;
}

export default Main;
