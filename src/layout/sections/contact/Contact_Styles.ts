import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const Contact = styled.section`
    
`

const Form = styled.form`
    max-width: 532px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    textarea {
        height: 165px;
        margin-bottom: 22px;

        resize: vertical;
    }
`

const FieldWrapper = styled.div<{
    name: string
}>`
    width: 100%;

    &::before {
        content: "${props => props.name}";
        font-weight: 200;
        color: ${theme.colors.input};
    }
`

const Field = styled.input.attrs(() => ({
    placeholder: "Example text"
}))`
    width: 100%;
    height: 50px;
    margin: 5px 0 48px;
    padding: 16px 18px;

    background-color: transparent;
    border: 1px solid ${theme.colors.input};
    border-radius: 6px;

    font-family: Poppins, 'sans-serif';
    font-size: 14px;
    font-weight: 400;
    line-height: 27px;
    color: ${theme.colors.font};

    &::placeholder {
        font-family: Poppins, 'sans-serif' !important;
    }

    @media ${theme.media.mobile} {
        margin: 5px 0 25px;
    }
`

export const S = {
    Contact,
    Form,
    FieldWrapper,
    Field
}