import { Container } from "../../../../../components/Container";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { S } from "./Contact_Styles";
import { ContactInfo } from "../../../contact/contactInfo/ContactInfo";

export const Contact: React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>

                <ContactInfo />
            </Container>
        </S.Contact>
    )
}