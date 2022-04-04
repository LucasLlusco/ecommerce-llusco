import styled from "styled-components";

export const ItemDetailContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`
export const DetailImages = styled.div`
    padding: 50px;
    div {
        width: 100%;
        min-height: 450px;
        height: 500px;   
    }
    img {
        width: 100%;
        height: 100%;
    }
    
`
export const DetailInfo = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`