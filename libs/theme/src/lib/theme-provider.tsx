import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import { ReactNode } from 'react';

const theme = createTheme({
  primaryColor: 'red',
});

export interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider theme={theme} defaultColorScheme="auto">
        {children}
      </MantineProvider>
    </>
  );
}
