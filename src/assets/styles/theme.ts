import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    black_100: '#000000',
    white_100: '#FFFFFF',
    red_100: '#F13D42',
    red_50: '#FB9999',
    red_25: '#FFCCCC',
    grey_75: '#434343',
    grey_50: '#737373',
    grey_25: '#BBBBBB',
    grey_10: '#EAEAEA',
  },
};
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
