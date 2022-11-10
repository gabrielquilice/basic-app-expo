import Home from 'screens/Home';
import {ThemeProvider} from 'styled-components';

import theme from 'styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
