import { css, keyframes } from 'styled-components';

const visibleAnimation = keyframes`
  from {
    visibility: hidden;
  }

  to {
    visibility: visible;
  }
`;

const hiddenAnimation = keyframes`
  from {
    visibility: visible;
  }

  to {
    visibility: hidden;
  }
`;

export const turnVisible = css`
  animation: ${visibleAnimation} 0.3s forwards;
`;

export const turnHidden = css`
  animation: ${hiddenAnimation} 0.3s forwards;
`;
