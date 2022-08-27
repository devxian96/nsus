import React from 'react';
import { CssReset } from './components';
import { css } from '@emotion/react';
import CodePreview from './components/CodePreview';
import code from './assets/code';

import useData from '../../src/index';

const App: React.FC = (): JSX.Element => {
  const state = useData({ count: 0 });

  const style = {
    header: css`
      color: white;
      display: flex;
      justify-content: space-between;
      padding: 30px 40px;
    `,
    logo: css`
      font-size: 3rem;
      font-weight: 700;
    `,
    footer: css`
      color: white;
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      padding: 30px;
    `,
    character: css`
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -220px;
      margin-top: -370px;
    `,
    example: css`
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      margin-right: -60px;
      max-width: 80%;
      position: absolute;
      right: 10vw;
      width: 640px;
      height: 80vh;

      CodePreview {
        border-radius: 10px;
        box-shadow: 0 16px 40px -5px rgba(0, 0, 0, 0.5);
        display: inline-block;
        font-size: 0.8rem;
        margin-top: -50px;
        padding: 40px 50px 40px 45px;
        pointer-events: all;
        white-space: pre-wrap;
        width: auto;
        background-color: #222;
      }
    `,
  };

  return (
    <main>
      <CssReset />

      <header css={style.header}>
        <h1 css={style.logo}>NSUS</h1>
        <div>GITHUB</div>
      </header>

      <div css={style.character}>
        <img src="/dog.png" alt="dog" loading="lazy" />
      </div>

      <section css={style.example}>
        <article>
          <CodePreview code={code} />
          <button onClick={() => state.count++}>count is {state.count}</button>
        </article>
      </section>

      <footer css={style.footer}>
        <small>MIT License</small>
      </footer>
    </main>
  );
};

export default App;
