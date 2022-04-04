import styled from "styled-components";

export const ProductCard = styled.li`
    border: 1px solid #30303027;
    border-radius: 8px;
    
`
export const ProductImg = styled.div`
    width: 100%;
    min-height: 170px;
    height: 190px;
    img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
`
export const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 25px;
`

