import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import CopyButton from './CopyButton';
import { css } from '@emotion/react';

import 'prismjs/themes/prism-okaidia.css';
import type { CodeProps } from '../types/common';

const CodePreview: React.FC<CodeProps> = ({ code, ...props }): JSX.Element => {
  const emotion = {
    button: css`
      button {
        float: right;
        border: none;
        color: white;
        background-color: transparent;
      }
    `,
  };
  return (
    <Highlight {...defaultProps} code={code} language="jsx" theme={undefined}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre css={emotion.button} className={className} style={{ ...style, position: 'relative' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
          <CopyButton code={code} {...props} />
        </pre>
      )}
    </Highlight>
  );
};

export default CodePreview;
