import styled from "styled-components";

export const Header = styled.header`
    padding: 10px 0px;
    background-color: ${({theme}) => theme.colors.darkBlue};
    color: ${({theme}) => theme.colors.white};
    a {
        color: ${({theme}) => theme.colors.white};
    }
`
export const HeaderTop = styled.nav`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
`;
export const HeaderBottom = styled.div`
    width: 90%;
    margin: auto;
    padding: 10px 0px;    
`;
export const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 576px) {
        padding: 10px 0px;
        flex-direction: column;
        gap: 15px;
        display: ${({open}) => (open ? "flex" : "none")};
        transition: 0.5s all ease;
    }
`;
export const MenuItem = styled.li`
    a.active {
        color: ${({theme}) => theme.colors.gray};
    }
`;

export const MenuMobile = styled.div`
    display: none;
    span {
        text-transform: uppercase;
        font-weight: 600;
    }
    svg {
        font-size: 1.7rem;
        cursor: pointer;
    }
    @media screen and (max-width: 576px) {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;

export const CartIcon= styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    a {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    span {
        @media screen and (max-width: 576px) {
            display: none;
        }
    }
`;
