import styled from "styled-components"
import { theme } from "../styles/Theme"

export const MainButton = styled.button`
    width: 200px;
    height: 60px;

    border-radius: 83px;
    background: ${theme.colors.accent};

    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;

    @media ${theme.media.mobile} {
        width: 170px;

        font-size: 18px;
    }
`