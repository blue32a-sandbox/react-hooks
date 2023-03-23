import { useRef, useState } from "react";

export default function Ref({ changePageHandler }) {
  return (
    <>
      <h1>use ref</h1>
      <Counter />
      <Stopwatch />
      <Form />
      <p onClick={() => changePageHandler('home')}>back</p>
    </>
  );
}

function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click me!
      </button>
      {/* このcountは更新されない */}
      <p>You clicked {ref.current} times!</p>
    </div>
  );
}

function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <h2>Time passed: {secondsPassed.toFixed(3)}</h2>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </div>
  );
}

function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </div>
  );
}
