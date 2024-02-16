import { theme } from "./Theme"

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: string
    Fmin: number
    Fmax: number
}

export const font = ({ family, weight, color, lineHeight, Fmin, Fmax }: FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 500};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || "27px"};
    font-size: calc((100vw - 375px) / (1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;