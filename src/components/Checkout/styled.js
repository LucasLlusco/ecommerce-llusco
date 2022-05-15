import styled, {css} from "styled-components";

export const CheckoutContainer = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 50px 0px;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
export const Form = styled.form`
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid ${({theme}) => theme.colors.gray};
    height: fit-content;

`
export const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const Label = styled.label`
    font-weight: 700;
    width: fit-content;
    ${props => props.valid === "false" && css`
        color: ${({theme}) => theme.colors.red};
    `}
`
export const InputGroup = styled.div`
    position: relative;
    z-index: 90;
    display: flex;
`
export const FormInput = styled.input`
    border-radius: 3px;
    padding: 10px 40px 10px 10px;
    transition: .3s ease all;
    border: 1px solid ${({theme}) => theme.colors.gray};
    width: 100%;
    &:focus {
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
        border: 1px solid ${({theme}) => theme.colors.blue};
    }
    ${props => props.valid === "true" && css`
        border: 1px solid ${({theme}) => theme.colors.green} !important;    
    `} 
    ${props => props.valid === "false" && css`
        border: 1px solid ${({theme}) => theme.colors.red} !important;    
    `} 

`
export const IconValidation = styled.div`
    svg {
        position: absolute;
        right: 10px;
        top: 7px;
        z-index: 100;
        opacity: 0;
        ${props => props.valid === "true" && css` 
            opacity: 1;
            color: ${({theme}) => theme.colors.green};    
        `} 
        ${props => props.valid === "false" && css` 
            opacity: 1;
            color: ${({theme}) => theme.colors.red};    
        `}
    }
`
export const InputError = styled.p`
    font-size: 0.75rem;
    color: ${({theme}) => theme.colors.red};
    display: none;
    ${props => props.valid === "true" && css` 
        display: none;
    `}
    ${props => props.valid === "false" && css`
        display: block;
    `}
`

export const FormError = styled.div`
    padding: 13px 16px;
    color: ${({theme}) => theme.colors.darkRed};
    background-color: ${({theme}) => theme.colors.pink};
`
export const FormSuccess = styled.div`
    width: 90%;
    margin: auto;
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    text-align: center;
    svg {
        font-size: 80px;
        color: ${({theme}) => theme.colors.green};
    }
    h2 {
        font-weight: 500;
    }
`

export const SubmitBtn = styled.button`
    background-color: ${({theme}) => theme.colors.blue};
    color: ${({theme}) => theme.colors.white};
    width: 30%;
`
export const FormSubmit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`




