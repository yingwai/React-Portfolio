import styled from "styled-components"
import { theme } from "../../../../../styles/Theme";
import { font } from "../../../../../styles/Common";
import { FlexWrapper } from "../../../../../components/FlexWapper";

const Main = styled.section`
    overflow-x: clip;
    position: relative;

    ${FlexWrapper} > div:first-of-type {
        width: 100%;
        z-index: 1;
    }
    
    h2 {
        ${font({ weight: 600, lineHeight: "44px", Fmax: 50, Fmin: 30 })};

        span {
            white-space: nowrap;
        }
    }

    h1 {
        margin: 40px 0 60px;
        
        ${font({ color: "rgb(188, 188, 188)", Fmax: 30, Fmin: 20 })};

        @media ${theme.media.tabletop} {
            margin: 20px 0 60px;
        }

        @media ${theme.media.mobile} {
            margin: 20px 0 40px;
        }
    }

    button {
        width: 240px;

        @media ${theme.media.mobile} {
            width: 200px;
        }
    }

    @media ${theme.media.tabletop} {
        ${FlexWrapper} {
            flex-direction: column-reverse;
        }
    }

    .hidden-text {
        display: none;
    }
`

export const S = {
    Main
}