import styled from "styled-components"

type FlexWrapperPropsType = {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between' | 'space-evenly' | 'stretch',
    alight?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between' | 'space-evenly' | 'stretch',
    wrap?: 'wrap' | 'nowrap',
    gap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.alight || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap};
`