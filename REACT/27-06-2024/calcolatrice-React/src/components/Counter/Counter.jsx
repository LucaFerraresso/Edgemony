import "./Counter.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const HandleMinusClick = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="Counter">
      <button onClick={HandleMinusClick}>-</button>
      <span> {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
