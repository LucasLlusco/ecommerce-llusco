import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

`
export const CartList = styled.div`
    //padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    //border: 1px solid #c4c4c4;
    //grid-column: span 2;
`
export const CartProduct = styled.div`
    padding: 25px;
    display: flex;
    align-items: center;
    border: 1px solid #c4c4c4;

`
export const CartName = styled.div`
    width: 100%;
    max-width: 440px;
    margin: auto;
`
export const CartImg = styled.div`
    width: 55px;
    height: 55px;
    img {
        height: 55px;
        width: 55px;
    }
`
export const CartQuantity = styled.div`
    width: 100%;
    max-width: 220px;
    margin: auto;
    text-align: center;
`
export const CartPrice = styled.div`
    width: 100%;
    max-width: 100px;
    margin: auto 0 auto auto;
    text-align: right;
`

export const CartTotal = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #c4c4c4;
    //width: fit-content;
    height: fit-content;
    max-width: 330px;
    h2 {
        font-size: 1rem;
        text-transform: uppercase;
    }

    p {
        display: flex;
        justify-content: space-between;
    }

`

export const CartForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
`
  