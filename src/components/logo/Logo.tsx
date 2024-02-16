import styled from "styled-components";
import { FlexWrapper } from "../FlexWapper";
import { Icon } from "../Icon";
import React from "react";

export const Logo: React.FC = () => {
    return (
        <FlexWrapper alight="center" gap="15px">
            <Icon iconId="logo" />
            <LogoText>Portfolio</LogoText>
        </FlexWrapper>
    )
}

const LogoText = styled.h2`
    font-size: 30px;
    font-weight: 500;
    line-height: 45px;
`