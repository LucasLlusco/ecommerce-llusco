import styled from "styled-components";

export const EmptyCartContainer = styled.div`
    padding: 50px 0px; 
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    text-align: center;
    padding: 50px 0px;
    svg {
        font-size: 80px;
    }
    h2 {
        font-weight: 500;
    }
`
export const CartContainer = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
    padding: 50px 0px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
export const Product = styled.div`
    padding: 25px;
    display: flex;
    gap: 20px;
    align-items: center;
    border-bottom: 1px solid ${({theme}) => theme.colors.gray};
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
export const ProductDetails = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        cursor: pointer;
        color: ${({theme}) => theme.colors.gray};;
        transition: .3s ease all;
        &:hover {
            color: ${({theme}) => theme.colors.lightRed};
        }
    }
`
export const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const ProductImg = styled.div`
    width: 55px;
    height: 55px;
    @media screen and (max-width: 768px) {
        height: 100px;
        width: 100px;
    }
    img {
        height: 55px;
        width: 55px;
        object-fit: contain;
        @media screen and (max-width: 768px) {
            height: 100px;
            width: 100px;
        }
    }
`
export const ProductName = styled.div`
    width: 100%;
    max-width: 440px;
    margin: auto;
`
export const ProductQuantity = styled.div`
    width: 100%;
`
export const ProductPrice = styled.div`
    width: 100%;
`
export const ClearBtn = styled.button`
    width: fit-content;
    align-self: flex-end;
    background-color: ${({theme}) => theme.colors.lightRed};
    color: ${({theme}) => theme.colors.white};
    display: flex;
    align-items: center;
`
export const SummaryItems = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid ${({theme}) => theme.colors.gray};
    height: fit-content;
    border-radius: 3px;
    width: ${({inCheckout}) => inCheckout === "inCheckout"? "initial" : "300px"};
    @media screen and (max-width: 576px) {
        width: initial;
    }
`
export const SummaryTitle= styled.h2`
    font-size: 1rem;
    text-transform: uppercase;
    padding-bottom: 20px;
    border-bottom: 1px solid ${({theme}) => theme.colors.gray};
    letter-spacing: 3px;
`
export const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;   
`
export const CheckoutBtn = styled.button`
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
    width: 100%;
    padding: 0px;
`
  