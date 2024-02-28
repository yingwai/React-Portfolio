import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../components/FlexWapper"

const About = styled.section`
    overflow-x: clip;

    position: relative;
    
    ${FlexWrapper} {
        @media ${theme.media.tabletop} {
            flex-direction: column;
            align-items: center;
            gap: 50px;
        }
    }

    & ~ section {
        position: unset;
    }
`

const AboutText = styled.div`
    p + p {
        margin-top: 30px;
    }
`

export const S = {
    About,
    AboutText
}