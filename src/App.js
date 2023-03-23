import { useState } from 'react';
import Callback from './Callback';
import Context from './Context';
import Custom from './Custom';
import Effect from './Effect';
import Home from './Home';
import Memo from './Memo';
import Reducer from './Reducer';
import Ref from './Ref';
import Rule from './Rule';
import State from './State';

function App() {
  const [page, setPage] = useState('home');
  const changePageHandler = function(page) {
    setPage(page);
  };

  const contents = new Map([
    ['home', <Home changePageHandler={changePageHandler} />],
    ['state', <State changePageHandler={changePageHandler} />],
    ['effect', <Effect changePageHandler={changePageHandler} />],
    ['rule', <Rule changePageHandler={changePageHandler} />],
    ['custom', <Custom changePageHandler={changePageHandler} />],
    ['context', <Context changePageHandler={changePageHandler} />],
    ['reducer', <Reducer changePageHandler={changePageHandler} />],
    ['callback', <Callback changePageHandler={changePageHandler} />],
    ['memo', <Memo changePageHandler={changePageHandler} />],
    ['ref', <Ref changePageHandler={changePageHandler} />],
  ]);
  const content = contents.get(page);

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
