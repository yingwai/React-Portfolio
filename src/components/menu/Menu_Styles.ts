import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Menu = styled.nav`
    position: relative;
    
    ul {
        display: flex;
        gap: 80px;

        li {
            white-space: nowrap;

            @media ${theme.media.mobile} {
                &:first-child {
                    padding-left: 15px;
                }

                &:last-child {
                    padding-right: 15px;
                }
            }
        }
    }

    // TODO Можно ли как-то иначе реализовать подобное?
    &::before {
        display: none;

        content: "";
        height: 24px;
        width: 15px;

        box-shadow: 10px 0px 10px 0px ${theme.colors.primaryBg};

        position: fixed;
        left: 0;

        @media ${theme.media.mobile} {
            display: inline-block;
        }
    }

    &::after {
        display: none;

        content: "";
        height: 24px;
        width: 15px;

        box-shadow: -10px 0px 10px 0px ${theme.colors.primaryBg};

        position: fixed;
        right: 0;

        @media ${theme.media.mobile} {
            display: inline-block;
        }
    }

    @media ${theme.media.mobile} {
        width: 100%;
        
        display: flex;
        justify-content: flex-start;

        overflow-x: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`

export const S = {
    Menu
}