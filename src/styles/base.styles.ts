import { css } from 'styled-components';

const base = css`
  * {
    font-weight: 400;
  }

  html {
    /* font-family: SPOQA-Regular, Roboto, system-ui, 'Segoe UI', Helvetica, Arial, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif; */
    /* font-family: Roboto, system-ui, 'Segoe UI', Helvetica, Arial, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif; */
    /* font-size: 62.5%; */
  }

  body {
    position: relative;
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
  }

  h4 {
    font-size: 16px;
    font-weight: 500;
  }

  h5 {
    font-size: 14px;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;

export default base;
