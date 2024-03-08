// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { ThemeProvider } from '@org/theme';

import Page from './page';

export default function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}
