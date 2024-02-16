import styled from "styled-components"
import { theme } from "../../../../styles/Theme"

const Skill = styled.div`
    flex-grow: 1;

    max-width: 228px;
    width: 100%;
    padding: 30px;

    text-align: center;

    p {
        margin-top: 22px;

        text-transform: uppercase;
    }

    @media ${theme.media.mobile} {
        max-width: 170px;
        padding: 20px;
    }
`

export const S = {
    Skill
}