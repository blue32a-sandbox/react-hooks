import { useEffect, useState } from "react";

export default function Effect({ changePageHandler }) {
  return (
    <>
      <h1>use effect</h1>
      <Counter />
      <p onClick={() => changePageHandler('home')}>back</p>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log('Run count effect');
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log('Run effect');
    return () => console.log('Clean up');
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br />
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}
