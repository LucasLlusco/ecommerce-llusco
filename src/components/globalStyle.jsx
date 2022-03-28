import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    a {
        text-decoration: none;
        color: initial;
    }
    li {
        list-style: none;
    }
    .container {
        width: 90%;
        margin: auto;
    }
`;
