import photo from "../../../assets/images/photo.png";
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWapper";
import { MainButton } from "../../../components/MainButton";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justify="space-between" alight="center" gap="30px" className="present-me">
                    <div>
                        <h2>Hi! I am <span>Mironov Valery</span></h2>
                        <h1>I`m Web Develepmer</h1>

                        <MainButton>Let’s Begin</MainButton>
                    </div>

                    <S.ImageWrapper>
                        <img src={photo} alt="img-portfolio" />
                    </S.ImageWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    )
}