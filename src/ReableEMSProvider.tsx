import React from 'react';
import type { PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.styles';
import GlobalStyle from './styles/Global.styles';

const ReableEMSProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div id="modal-root"></div>
      <div id="backdrop"></div>
      {children}
    </ThemeProvider>
  );
};

export default ReableEMSProvider;
