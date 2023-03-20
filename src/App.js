import { useState } from 'react';
import Home from './Home';
import State from './State';

function App() {
  const [page, setPage] = useState('home');
  const changePageHandler = function(page) {
    setPage(page);
  };

  const contents = new Map([
    ['home', <Home changePageHandler={changePageHandler} />],
    ['state', <State changePageHandler={changePageHandler} />]
  ]);
  const content = contents.get(page);

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
