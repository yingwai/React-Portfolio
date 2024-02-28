import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body {
        min-width: 375px;
        min-height: 100vh;

        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        background-color: ${theme.colors.secondaryBg};
    }

    .App {
        min-height: 100vh;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    section {
        padding: 120px 0;

        &:first-of-type {
            padding-top: 180px;

            @media ${theme.media.tabletop} {
                padding-top: 200px;   
            }
        }

        &:nth-of-type(odd) {
            background-color: ${theme.colors.primaryBg};
        }
        &:nth-of-type(even) {
            background-color: ${theme.colors.secondaryBg};
        }

        @media ${theme.media.mobile} {
            padding: 80px 0;
        }
    }

    a {
        text-decoration: none;
        color: ${theme.colors.font};

        &.nav-link:hover {
            background: ${theme.colors.accent};
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    ul {
        list-style: none;

        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }

    button {
        color: ${theme.colors.font};
        background-color: unset;
        border: none;

        cursor: pointer;
    }

    p {
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
    }

    h3 {
        font-size: 30px;
        font-weight: 600;
        line-height: 88.5%;
    }
`