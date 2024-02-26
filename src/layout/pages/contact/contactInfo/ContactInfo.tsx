import React from 'react';
import { Icon } from '../../../../components/Icon';
import { S } from "./ContactInfo_Styles";
import { FlexWrapper } from '../../../../components/FlexWapper';
import { NavLink } from 'react-router-dom';
import { theme } from '../../../../styles/Theme';

export const ContactInfo: React.FC = () => {
    return (
        <S.ContactInfo>
            <FlexWrapper justify='space-between' wrap='wrap' gap='40px'>
                <p>
                    If you have a proposal for me, contact me via telegram or mail. You can also follow the
                    <NavLink to={"/contact"} className={"nav-link"} style={{color: theme.colors.input}}> link </NavLink> 
                    and write to me directly from the site.
                </p>

                <div>
                    <S.DataTitle>Message me here</S.DataTitle>

                    <FlexWrapper direction='column' gap='10px'>
                        <FlexWrapper alight='flex-end' gap='5px'>
                            <Icon iconId='discrod' width='32' height='32' viewBox='0 0 32 32' />
                            <S.MyDataText>.yingwai</S.MyDataText>
                        </FlexWrapper>
                        <FlexWrapper alight='flex-end' gap='5px'>
                            <Icon iconId='email' width='32' height='32' viewBox='0 0 32 32' />
                            <S.MyDataText>nick.yingwai@mail.ru</S.MyDataText>
                        </FlexWrapper>
                    </FlexWrapper>
                </div>
            </FlexWrapper>
        </S.ContactInfo>
    );
};