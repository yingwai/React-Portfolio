import styled from "styled-components"
import bgElement from "../../../assets/images/main-bg-element.png";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Main = styled.section`
    padding-top: 180px;
    position: relative;
    
    overflow-x: clip;
    
    h2 {
        ${font({ weight: 600, lineHeight: "44px", Fmax: 54, Fmin: 40 })};

        span {
            white-space: nowrap;
        }
    }

    h1 {
        margin: 40px 0 60px;
        
        ${font({ color: "rgb(188, 188, 188)", Fmax: 30, Fmin: 26 })};

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
        padding-top: 200px;

        .present-me {
            flex-direction: column-reverse;
        }
    }
`

const ImageWrapper = styled.div`
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
    Main,
    ImageWrapper
}