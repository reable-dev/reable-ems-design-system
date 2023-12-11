import { createGlobalStyle } from 'styled-components';
import reset from './reset.styles';
import base from './base.styles';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${base}

  

  html, body, #root {
    height: 100%;
  }

  /********** hidden scroll **********/
  html,
  body {
    /* scrollbar-width: none; */
    /* font-size: 62.5%; */
    color: #222;
  }

  body::-webkit-scrollbar {
    /* display: none; */
  }

  button, 
  input {
    font-family: inherit;
    user-select: none;
  }

  @font-face {
    font-family: "SpoqaHanSansNeoBold";
    font-weight: 700;
    src: url("static/fonts/SpoqaHanSansNeo-Bold.woff");
  }
  @font-face {
    font-family: "SpoqaHanSansNeoMedium";
    font-weight: 500;
    src: url("static/fonts/SpoqaHanSansNeo-Medium.woff");
  }
  @font-face {
    font-family: "SpoqaHanSansNeoRegular";
    font-weight: 400;
    src: url("static/fonts/SpoqaHanSansNeo-Regular.woff");
  }
  @font-face {
    font-family: "SpoqaHanSansNeoLight";
    font-weight: 300;
    src: url("static/fonts/SpoqaHanSansNeo-Light.woff");
  }
`;

export default GlobalStyle;
