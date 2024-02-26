import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Footer = styled.footer`
    padding: 42px 0;

    background-color: ${theme.colors.primaryBg};

    position: relative;

    nav {
        margin: 40px 0;
    }
`

const IconBlock = styled.div`
    width: 100%;
`

export const S = {
    Footer,
    IconBlock
}