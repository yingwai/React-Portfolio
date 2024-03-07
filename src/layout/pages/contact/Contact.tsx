import { Container } from "../../../components/Container";
import { MainButton } from "../../../components/MainButton";
import { SectionTitle } from "../../../components/SectionTitle";
import { S } from "./Contact_Styles";
import React, { ElementRef, useRef } from 'react';
import { ContactInfo } from "./contactInfo/ContactInfo";
import { FlexWrapper } from "../../../components/FlexWapper";
import { ScrollPageUp } from "../../../components/ScrollPageUp";
import emailjs from '@emailjs/browser';


export const Contact: React.FC = () => {
    ScrollPageUp();

    const form = useRef<ElementRef<'form'>>();

    const sendEmail = (e: any) => {
        console.log("start");
        
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_2e9vqhq', 'template_tb6810e', form.current, { publicKey: 'OXX4XyqPvcw86V50q', })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>

                <FlexWrapper direction="column" gap="40px">
                    <ContactInfo />

                    {/* @ts-ignored */}
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <S.FieldWrapper id="btn-Name">
                            <S.Field className="form-inpt" name={"user_name"} required />
                        </S.FieldWrapper>

                        <S.FieldWrapper id="btn-Email">
                            <S.Field className="form-inpt" name={"subject"} required />
                        </S.FieldWrapper>

                        <S.FieldWrapper id="btn-Message">
                            <S.Field className="form-inpt" as={"textarea"} name={"message"} required />
                        </S.FieldWrapper>

                        <MainButton>Submit</MainButton>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.Contact>
    );
};
