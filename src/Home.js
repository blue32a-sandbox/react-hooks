export default function Home({ changePageHandler }) {
  return (
    <>
      <h1>Learning React hooks</h1>
      <ul>
        <li onClick={() => changePageHandler('rule')}>Rules</li>
      </ul>

      <h2>Hooks</h2>
      <ul>
        <li onClick={() => changePageHandler('state')}>use state</li>
        <li onClick={() => changePageHandler('effect')}>use effect</li>
      </ul>
    </>
  );
}
