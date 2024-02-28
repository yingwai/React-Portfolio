import React from 'react';
import myPhoto from "../../assets/images/myPhoto.jpg";
import { S } from "./MyPhoto_Styles";
import Tilt from 'react-parallax-tilt';

export const MyPhoto: React.FC = () => {
    return (
        <Tilt tiltEnable={false}
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="#ffffff7f"
            glarePosition="top"
            glareBorderRadius="50px 0px 50px 0px"
        >
            <S.ImageWrapper>
                <img src={myPhoto} alt="img-portfolio" />
            </S.ImageWrapper>
        </Tilt>
    );
};