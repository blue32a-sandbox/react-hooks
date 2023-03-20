import { useState } from "react";

export default function State({ changePageHandler }) {
  return (
    <>
      <h1>use state</h1>
      <Counter />
      <p onClick={() => changePageHandler('home')}>back</p>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
