import styled from "styled-components"
import { theme } from "../../../../styles/Theme"

const Project = styled.div`
    max-width: 700px;
    width: 550px;
    min-height: 670px;
    height: 100%;
    padding: 25px 25px 40px 25px;

    border: 1px solid rgb(163, 157, 157);
    border-radius: 50px 0px 50px 0px;

    background: ${theme.colors.primaryBg};

    position: relative;

    div {
        height: 100%;
    }

    img {
        width: 100%;
        max-height: 280px;
        margin-bottom: 40px;

        border-radius: 24px 8px 8px 8px;

        object-fit: cover;
    }

    h3 {
        text-align: center;

        position: relative;

        &::before {
            content: "";
            display: inline-block;
            width: 300px;
            height: 4px;

            border-radius: 83px;
            background: ${theme.colors.accent};

            position: absolute;
            left: 50%;
            bottom: -23px;
            transform: translateX(-50%);
        }
    }

    p {
        margin: 67px 0 50px 0;
    }

    button {
        justify-self: flex-end;
    }

    @media ${theme.media.desktop} {
        width: 100%;
    }
`

export const S = {
    Project
}