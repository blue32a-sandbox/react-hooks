export default function Home({ changePageHandler }) {
  return (
    <>
      <h1>Learning React hooks</h1>
      <ul>
        <li onClick={() => changePageHandler('rule')}>Rules</li>
        <li onClick={() => changePageHandler('custom')}>Custom hook</li>
      </ul>

      <h2>Hooks</h2>
      <ul>
        <li onClick={() => changePageHandler('state')}>use state</li>
        <li onClick={() => changePageHandler('effect')}>use effect</li>
        <li onClick={() => changePageHandler('context')}>use context</li>
        <li onClick={() => changePageHandler('reducer')}>use reducer</li>
        <li onClick={() => changePageHandler('callback')}>use callback</li>
        <li onClick={() => changePageHandler('memo')}>use memo</li>
        <li onClick={() => changePageHandler('ref')}>use ref</li>
        <li onClick={() => changePageHandler('imperative-handle')}>use imperative handle</li>
        <li onClick={() => changePageHandler('layout-effect')}>use layout effect</li>
        <li onClick={() => changePageHandler('debug-value')}>use debug value</li>
        <li onClick={() => changePageHandler('deferred-value')}>use deferred value</li>
        <li onClick={() => changePageHandler('transition')}>use transition</li>
        <li onClick={() => changePageHandler('id')}>use id</li>
      </ul>
    </>
  );
}
