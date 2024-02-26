import { Container } from "../../../../../components/Container";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { S } from "./About_Styles";
import { Fade } from "react-awesome-reveal";

export const About: React.FC = () => {
    return (
        <S.About id="home-about">
            <Container>
                <SectionTitle>About me</SectionTitle>

                <Fade direction="up" delay={100} triggerOnce={true}>
                    <p>I am an experienced front-end developer with a unique approach to creating user interfaces and attention to detail. My passion for web development began with creating simple websites and now I specialize in developing dynamic, responsive and intuitive interfaces.</p>
                </Fade>
            </Container>
        </S.About>
    )
}