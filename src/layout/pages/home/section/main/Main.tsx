import { Link } from "react-scroll";
import { Container } from "../../../../../components/Container"
import { FlexWrapper } from "../../../../../components/FlexWapper";
import { MainButton } from "../../../../../components/MainButton";
import { MyPhoto } from "../../../../../components/myPhoto/MyPhoto";
import { S } from "./Main_Styles";
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justify="space-between" alight="center" gap="30px">
                    <div>
                        <h2>
                            <p className="hidden-text">I am Mironov Valery</p>
                            <Typewriter
                                options={{
                                    strings: ['Hi! I am <span>Mironov Valery</span>'],
                                    autoStart: true,
                                    cursor: "",
                                    delay: 50,
                                    deleteSpeed: Infinity,
                                }}
                            />
                        </h2>
                        <h1>
                            <p className="hidden-text">I'm Web Develepmer</p>
                            <p className="hidden-text">I'm Front-end Develepmer</p>
                            <p className="hidden-text">I'm a React Develepmer</p>
                            <p className="hidden-text">I'm a Vue Develepmer</p>
                            <Typewriter
                                options={{
                                    strings: ['I\'m Web Develepmer', 'I\'m Front-end Develepmer', 'I\'m a React Develepmer', 'I\'m a Vue Develepmer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                    deleteSpeed: 25,
                                }}
                            />
                        </h1>

                        <Link
                            to="home-about"
                            smooth={true}
                            offset={-100}
                            duration={400}
                        >
                            <MainButton>Let's Begin</MainButton>
                        </Link>
                    </div>

                    <MyPhoto />
                </FlexWrapper>
            </Container>
        </S.Main >
    )
}