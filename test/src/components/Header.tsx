import reactLogo from '../assets/react.svg';
import React from 'react';

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/devxian96/nsus" target="_blank" rel="noreferrer">
          <span className="title">NSUS</span>
        </a>
      </div>
      <h1>Vite + React + nsus</h1>
    </>
  );
};

export default Header;
