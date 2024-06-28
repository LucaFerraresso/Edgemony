import "./Form.css";
import Button from "../Buttons/Button";

const Form = () => {
  return (
    <form className="Log-in">
      <h2>Register (if u want)</h2>
      <label htmlFor="username">Email</label>
      <input type="text" placeholder="Email" required />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" required />
      <Button type="submit" name="Log-in" />
    </form>
  );
};

export default Form;
