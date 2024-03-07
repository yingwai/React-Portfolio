import { Container } from "../../components/Container";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWapper";
import { Icon } from "../../components/Icon";
import { Logo } from "../../components/logo/Logo";
import { S } from "./Footer_Styles";

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction="column" alight="center">
                    <S.IconBlock>
                        <FlexWrapper justify="space-between" alight="center">
                            <Logo />

                            <FlexWrapper alight="center" gap="30px">
                                <a href="https://github.com/yingwai" target="_blank" rel="noreferrer">
                                    <Icon iconId="github" width="36px" height="36px" viewBox="0 0 36 36" />
                                </a>
                                <a href="https://t.me/yingwai73" target="_blank" rel="noreferrer">
                                    <Icon iconId="telegram" width="36px" height="36px" viewBox="0 0 36 36" />
                                </a>
                            </FlexWrapper>
                        </FlexWrapper>
                    </S.IconBlock>

                    <Menu />

                    <p>WEB DEVELOPER 2024</p>
                </FlexWrapper>
            </Container>
        </S.Footer>
    )
}