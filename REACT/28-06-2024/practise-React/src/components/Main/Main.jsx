import "./Main.css";
import Button from "../Atoms/Buttons/Button";
import Card from "../Atoms/Card/Card";
import Form from "../Atoms/Form/Form";

const Main = () => {
  return (
    <div className="main">
      <div className="subA">
        <Card
          title="CARD"
          src="https://images.unsplash.com/photo-1683041133704-1de1c55d050c?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="subB">
        <Form />
      </div>
      <div className="subC">
        <div>
          <h2>Button Elements</h2>
          <Button name="Button1" />
          <Button name="Button1" />
          <Button name="Button3" />
          <Button name="Button4" />
        </div>
      </div>
    </div>
  );
};

export default Main;
