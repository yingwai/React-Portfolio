import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
    margin-bottom: 80px;

    font-size: 36px;
    font-weight: 600;
    line-height: 69px;

    position: relative;

    &::before {
        content: "";
        display: inline-block;
        height: 1px;
        width: 110px;
        
        background: ${theme.colors.accent};

        position: absolute;
        bottom: -10px;
        left: 0;
    }

    @media ${theme.media.mobile} {
        margin-bottom: 40px;
    }
`