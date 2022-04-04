import styled from "styled-components";

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;   
    }
    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`