import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../components/FlexWapper"

const Projects = styled.section`
    & > div > ${FlexWrapper} {
        @media ${theme.media.desktop} {
            justify-content: center;
        }
    }
`

export const S = {
    Projects
}