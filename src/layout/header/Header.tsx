import { Container } from "../../components/Container";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWapper";
import { Logo } from "../../components/logo/Logo";
import { S } from "./Header_Styles";
import { Outlet } from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <>
            <S.Header>
                <Container>
                    <FlexWrapper justify="space-between" alight="center" gap="20px">
                        <Logo />

                        <Menu />
                    </FlexWrapper>
                </Container>
            </S.Header>

            <Outlet />
        </>
    )
};