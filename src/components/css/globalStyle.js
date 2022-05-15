import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    body {
        color: ${({theme}) => theme.colors.black};
        background-color: ${({theme}) => theme.colors.white};
    }
    button {
        padding: 0px 10px;
        height: 45px;
        border: none;
        border-radius: 3px;
        font-weight: bold;
        font-size: 0.875rem;
        cursor: pointer;
        transition: .1s ease all;
    }
    a {
        text-decoration: none;
        color: initial;
    }
    li {
        list-style: none;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
    
`;
