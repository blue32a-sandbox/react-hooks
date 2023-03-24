import { memo, useState, useTransition } from "react";

export default function Transition({ changePageHandler }) {
  return (
    <>
      <h1>use transition</h1>
      <TabContainer />
      <p onClick={() => changePageHandler('home')}>back</p>
    </>
  );
}

function TabContainer() {
  // const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    setTab(nextTab);
    // startTransition(() => setTab(nextTab));
  }

  return (
    <>
      <TabButton
        isActive={tab === 'about'}
        onClick={() => selectTab('about')}
      >
        About
      </TabButton>
      <TabButton
        isActive={tab === 'posts'}
        onClick={() => selectTab('posts')}
      >
        Posts (slow)
      </TabButton>
      <TabButton
        isActive={tab === 'contact'}
        onClick={() => selectTab('contact')}
      >
        Contact
      </TabButton>
      <hr />
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </>
  );
}

function TabButton({ children, isActive, onClick }) {
  const [isPending, startTransition] = useTransition();
  const bStyle = { display: 'inline-block', marginRight: '10px' };
  if (isActive) {
    return <b style={bStyle}>{children}</b>
  }
  if (isPending) {
    return <b className="pending" style={{...bStyle, color: '#777'}}>{children}</b>;
  }
  return (
    <button
      // onClick={() => onClick()}
      onClick={() => startTransition(() => onClick())}
      style={{ marginRight: '10px' }}
    >
      {children}
    </button>
  )
}

function AboutTab() {
  return (
    <p>Welcome to my profile!</p>
  );
}

const PostsTab = memo(function PostsTab() {
  // Log once. The actual slowdown is inside SlowPost.
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />');

  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return (
    <ul className="items">
      {items}
    </ul>
  );
});

function SlowPost({ index }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li className="item">
      Post #{index + 1}
    </li>
  );
}

function ContactTab() {
  return (
    <>
      <p>
        You can find me online here:
      </p>
      <ul>
        <li>admin@mysite.com</li>
        <li>+123456789</li>
      </ul>
    </>
  );
}
