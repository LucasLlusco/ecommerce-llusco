import styled from "styled-components";

export const Quantity = styled.div`
    display: flex;
    justify-content: center;
    button {
        background-color: #7D7D8226;
    }
    input {
        text-align: center;
        border: 1px solid ${({theme}) => theme.colors.gray};
        outline: none;
        color: ${({theme}) => theme.colors.black};
        font-weight: 600;
        width: 40%;
    }

`;
export const AddToCartBtn = styled.button`  
    width: 50%;
    margin: auto;
    background-color: ${({theme}) => theme.colors.blue};
    color: ${({theme}) => theme.colors.white};
`;
export const DecreaseBtn = styled.button`
    border-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
`;
export const IncreaseBtn = styled.button`
    border-radius: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
`;