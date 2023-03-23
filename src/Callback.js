import { memo, useCallback, useState } from "react";

export default function Callback({ changePageHandler }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <h1>use callback</h1>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />
      <p onClick={() => changePageHandler('home')}>back</p>
    </>
  );
}

function ProductPage({ productId, referrer, theme }) {
  // useCallbackを使わない場合、handleSubmitが新しいオブジェクトになるので、ShippingFormが再レンダリングされる
  // function handleSubmit(orderDetails) {
  //   post('/product/' + productId + '/buy', {
  //     referrer,
  //     orderDetails,
  //   });
  // }
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1);

  console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count
    };
    onSubmit(orderDetails);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p><b>Note: <code>ShippingForm</code> is artificially slowed down!</b></p>
      <label>
        Number of items:
        <button type="button" onClick={() => setCount(count - 1)}>–</button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
      </label><br />
      <label>
        Street:
        <input name="street" />
      </label><br />
      <label>
        City:
        <input name="city" />
      </label><br />
      <label>
        Postal code:
        <input name="zipCode" />
      </label><br />
      <button type="submit">Submit</button>
    </form>
  );
});

function post(url, data) {
  // Imagine this sends a request...
  console.log('POST ' + url);
  console.log(data);
}
