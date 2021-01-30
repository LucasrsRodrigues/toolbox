import React from 'react';
import Home from './pages/Home';

import { MyThemeProvider } from './hooks/Theme';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return(
    <MyThemeProvider>
      <GlobalStyle />
      <Home />
    </MyThemeProvider>
  );
}

export default App;