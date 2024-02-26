import styled from "styled-components"
import { theme } from "../../styles/Theme"
import bgElement from "../../assets/images/main-bg-element.png";

const ImageWrapper = styled.div`
    max-width: 380px;
    width: 100%;

    position: relative;
    z-index: 0;

    img {
        width: 380px;
        height: 450px;
        
        object-fit: cover;
        border-radius: 50px 0px 50px 0px;

        @media ${theme.media.mobile} {
            width: 330px;
            height: 400px;
        }
    }

    &::before {
        content: "";
        display: inline-block;
        box-sizing: content-box;
        width: 380px;
        height: 450px;
        padding: 5px;

        background: ${theme.colors.accentBorder};
        border-radius: 50px 0px 50px 0px;

        position: absolute;
        top: -5px;
        left: -5px;

        z-index: -1;

        @media ${theme.media.mobile} {
            width: 330px;
            height: 400px;
        }
    }

    &::after {
        content: "";
        display: inline-block;
        
        width: 665px;
        height: 665px;
        
        background-image: url(${bgElement});
        
        
        position: absolute;
        right: -270px;
        bottom: -270px;
        
        z-index: -2;
    }
`

export const S = {
    ImageWrapper
}