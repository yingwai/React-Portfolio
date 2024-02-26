import { Container } from "../../../components/Container";
import { MainButton } from "../../../components/MainButton";
import { SectionTitle } from "../../../components/SectionTitle";
import { S } from "./Contact_Styles";
import React from 'react';
import { ContactInfo } from "./contactInfo/ContactInfo";
import { FlexWrapper } from "../../../components/FlexWapper";
import { ScrollPageUp } from "../../../components/ScrollPageUp";


export const Contact: React.FC = () => {
    ScrollPageUp();

    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>

                <FlexWrapper direction="column" gap="40px">
                    <ContactInfo />

                    <S.Form>
                        <S.FieldWrapper name="Name">
                            <S.Field />
                        </S.FieldWrapper>

                        <S.FieldWrapper name="Email">
                            <S.Field />
                        </S.FieldWrapper>

                        <S.FieldWrapper name="Message">
                            <S.Field as={"textarea"} />
                        </S.FieldWrapper>

                        <MainButton>Submit</MainButton>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.Contact>
    );
};
