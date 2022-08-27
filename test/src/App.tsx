import React, { useCallback } from 'react';
import { CssReset } from './components';
import { css } from '@emotion/react';
import CodePreview from './components/CodePreview';
import code from './assets/code';

import useData from '../../src/index';

const App: React.FC = (): JSX.Element => {
  const state = useData({ count: 0 });

  const oneUp = useCallback(() => state.count++, []);

  const style = {
    header: css`
      position: absolute;
      color: white;
      display: flex;
      justify-content: space-between;
      z-index: 1;
      width: 100vw;

      a {
        font-weight: 600;
      }

      h1,
      a {
        padding: 30px 40px;
      }
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
      z-index: 0;
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

      article {
        h2 {
          font-size: 1.25rem;
          font-weight: 600;
        }
      }
    `,

    button: css`
      color: white;
      width: 100%;
      height: 50px;
      font-size: 1.25rem;
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      cursor: pointer;

      :hover {
        background: rgba(255, 255, 255, 0.5);
      }
    `,
  };

  return (
    <main>
      <CssReset />

      <header css={style.header}>
        <h1 css={style.logo}>NSUS</h1>
        <a href="https://github.com/devxian96/nsus" target="_blank" rel="noreferrer">
          Github
        </a>
      </header>

      <div css={style.character}>
        <img src="/dog.png" alt="dog" loading="lazy" />
      </div>

      <section css={style.example}>
        <article>
          <h2>Example</h2>
          <CodePreview code={code} />
          <button css={style.button} onClick={oneUp}>
            count is {state.count}
          </button>
        </article>
      </section>

      <footer css={style.footer}>
        <a href="https://github.com/devxian96/nsus/blob/main/LICENSE" target="_blank" rel="noreferrer">
          MIT License
        </a>
      </footer>
    </main>
  );
};

export default App;
