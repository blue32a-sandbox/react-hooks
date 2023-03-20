import { useEffect, useState } from "react";

export default function Rule({ changePageHandler }) {
  return (
    <>
      <h1>Rules</h1>
      <Form />
      <p onClick={() => changePageHandler('home')}>back</p>
    </>
  );
}

function Form() {
  const [name, setName] = useState('Mary');

  // 👎 フックが呼ばれる順番が変わってしまうのでバグが発生する
  // react-hooks/rules-of-hooks が有効の場合はESLintエラーになる
  // ルールが無効の場合、実行時にエラーになる
  // if (name !== '') {
  //   useEffect(function persistForm() {
  //     localStorage.setItem('formData', name);
  //   });
  // }

  useEffect(function persistForm() {
    // 👍 条件を中に入れることでフックが呼ばれる順番は変らない
    if (name !== '') {
      localStorage.setItem('formData', name);
    }
  });

  const [surname, setSurname] = useState('Poppins');

  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });

  return (
    <form>
      <input name="name" value={name} onChange={(event) => setName(event.target.value)} /><br />
      <input name="surname" value={surname} onChange={(event) => setSurname(event.target.value)} />
    </form>
  )
}
