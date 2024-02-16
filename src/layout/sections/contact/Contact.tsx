import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { MainButton } from "../../../components/MainButton";
import { S } from "./Contact_Styles";

export const Contact: React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>

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
            </Container>
        </S.Contact>
    )
}