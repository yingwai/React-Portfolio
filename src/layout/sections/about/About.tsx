import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { S } from "./About_Styles";

export const About: React.FC = () => {
    return (
        <S.About>
            <Container>
                <SectionTitle>About me</SectionTitle>

                <p>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.</p>
            </Container>
        </S.About>
    )
}