export default function Home({ changePageHandler }) {
  return (
    <>
      <h1>Learning React hooks</h1>
      <ul>
        <li onClick={() => changePageHandler('state')}>use state</li>
      </ul>
    </>
  );
}
