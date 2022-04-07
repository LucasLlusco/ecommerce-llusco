import styled from "styled-components";

export const Header = styled.header`
    padding: 20px 0px;
`
export const HeaderTop = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
//export const Logo = style.div`

//`;
export const ContainerSearch = styled.div`
    width: 65%;
    display: flex;
    align-items: center;
    position: relative;

    input {
        width: 100%;
        padding: 13px 16px;
        font-size: 1rem;
    }
    span {
        position: absolute;
        top: 0;
        right: 0;
        width: 55px;
        height: 28px;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        line-height: 42px;
        cursor: pointer;
        border-left: 1px solid #E2E2E2;
    }
`;
export const SessionCarrito = styled.div `
    display: flex;
    align-items: center;
    gap: 20px;
    a {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;

export const HeaderBottom = styled.div `
    display: flex;
    align-items: center;
    gap: 20px;
    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        a.active {
            color: red;

        }
    }
`;
