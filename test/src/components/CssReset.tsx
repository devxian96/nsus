import React from 'react';
import normalize from 'emotion-normalize';
import { css, Global } from '@emotion/react';

const CssReset: React.FC = (): JSX.Element => {
  return (
    <Global
      styles={css`
        ${normalize}
        h1, h2, h3, h4, h5, h6 {
          font-size: 1em;
          font-weight: normal;
          margin: 0;
        }
        body {
          height: 100vh;
          width: 100vw;
          background-image: url('/background.png');
          background-repeat: no-repeat;
          background-size: cover;
          font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto,
            noto, segoe ui, arial, sans-serif;
        }
      `}
    />
  );
};

export default CssReset;
