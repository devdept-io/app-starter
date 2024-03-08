import { MantineProvider, createTheme } from '@mantine/core';
import { ReactNode } from 'react';

const theme = createTheme({
  primaryColor: 'cyan',
});

export interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
