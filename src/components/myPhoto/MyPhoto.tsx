import React from 'react';
// import photo from "../../assets/images/photo.png";
import photo from "../../assets/images/47968d13-cfb9-4a34-bbe6-2def2772f685.jpg";
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
                <img src={photo} alt="img-portfolio" />
            </S.ImageWrapper>
        </Tilt>
    );
};