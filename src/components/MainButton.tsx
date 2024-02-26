import styled from "styled-components"
import { theme } from "../styles/Theme"

export const MainButton = styled.button`
    width: 180px;
    height: 50px;

    border-radius: 83px;
    background: ${theme.colors.accent};

    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;

    transition: 2s ease-in-out;

    &:hover {
        background: linear-gradient(90deg, #B21447, #AB3C82);
    }

    @media ${theme.media.mobile} {
        width: 170px;

        font-size: 18px;
    }
`