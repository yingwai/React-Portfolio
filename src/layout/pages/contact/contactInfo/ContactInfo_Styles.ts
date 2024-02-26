import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWapper"
import { theme } from "../../../../styles/Theme"

const ContactInfo = styled.div`
    ${FlexWrapper} > p:first-child {
        width: 60%;

        @media ${theme.media.mobile} {
            width: 100%;
        }
    }
`

const DataTitle = styled.p`
    white-space: nowrap;
    margin-bottom: 20px;
`

const MyDataText = styled.p`
    font-size: 14px;
`

export const S = {
    ContactInfo,
    DataTitle,
    MyDataText
}