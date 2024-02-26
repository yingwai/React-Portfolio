import styled from "styled-components"
import { theme } from "../../../../../../styles/Theme"

const Skill = styled.div`
    flex-grow: 1;

    max-width: 228px;
    width: 100%;
    padding: 40px;

    text-align: center;

    position: relative;

    svg {
        animation: pulse 5s infinite;
    }

    p {
        margin-top: 22px;

        text-transform: uppercase;
    }

    @media ${theme.media.mobile} {
        max-width: 170px;
        padding: 20px;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        65% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`

export const S = {
    Skill
}