import reactLogo from "../assets/react.svg";
import React from "react";

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/devxian96/reaktion" target="_blank">
          <span className="title">REAKTION</span>
        </a>
      </div>
      <h1>Vite + React + reacktion</h1>
    </>
  );
};

export default Header;
