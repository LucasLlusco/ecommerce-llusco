import styled from "styled-components";

export const ProductCard = styled.li`
    border: 1px solid ${({theme}) => theme.colors.gray};
    border-radius: 3px;
`
export const ProductImg = styled.div`
    width: 100%;
    min-height: 170px;
    height: 190px;
    padding-top: 15px;
    img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        object-fit: contain;
    }
`
export const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 25px;
    p {
        height: 60px;
        font-size: 0.875rem;
    }
    span {
        font-weight: 600;
        font-size: 1.375rem;
    }
`
export const ProductBtn = styled.button`
    background-color: ${({theme}) => theme.colors.blue};
    color: ${({theme}) => theme.colors.white};
`

