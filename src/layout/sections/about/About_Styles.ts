import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const About = styled.section`
    p {
        width: 85%;

        @media ${theme.media.mobile} {
            width: 100%;
        }
    }
`

export const S = {
    About
}