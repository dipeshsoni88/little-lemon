import React from 'react';
import Nav from './Nav';
import Main from './Main';
import '../css/App.css';

export default function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Main />
      <footer role="contentinfo" style={{ marginTop: '4rem', padding: '2rem', background: '#f5f5f5', textAlign: 'center' }}>
        <p>&copy; 2025 Little Lemon. All rights reserved.</p>
      </footer>
    </>
  );
}
