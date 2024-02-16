import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Header = styled.header`
    padding: 25px 0;

    background-color: ${theme.colors.primaryBg};
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.22);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 99999;

    @media ${theme.media.tabletop} {
        & > div > div {
            flex-direction: column;
        }
    }
`

export const S = {
    Header
}