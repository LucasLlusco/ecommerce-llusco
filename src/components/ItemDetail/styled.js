import styled from "styled-components";

export const ItemDetailContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
export const DetailImage = styled.div`
    height: fit-content;
    padding: 50px;
    @media screen and (max-width: 576px) {
        padding: 20px 0px;   
    }
    div {
        width: 100%;
        min-height: 450px;
        height: 500px;   
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
`
export const DetailInfo = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (max-width: 576px) {
        padding: 20px 0px;
    }
    b {
        text-transform: uppercase;
    }
    a {
        width: 50%;
        margin: auto;
    }
`
export const ProductName = styled.h1`
    font-size: 1.375rem;
    font-weight: 400;
    line-height: 1.5;
`
export const ProductPrice = styled.p`
    font-size: 2.5em;
    font-weight: 400;
    color: ${({theme}) => theme.colors.green};
`
export const ProductDescription = styled.ul`
    li {
        margin-left: 20px;
        list-style: initial;
        line-height: 25px;
        font-size: 0.875rem;
    }
`
export const CheckoutBtn = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};    
`
export const ProductStockTrue = styled.p`
    color: ${({theme}) => theme.colors.green};   
    display: flex;
    align-items: center;
    gap: 5px;  
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
`
export const ProductStockFalse = styled.p`
    color: ${({theme}) => theme.colors.red};    
    display: flex;
    align-items: center;
    gap: 5px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
`

