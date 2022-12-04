import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
h1,h2,p {
    margin: 0;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}
`;
