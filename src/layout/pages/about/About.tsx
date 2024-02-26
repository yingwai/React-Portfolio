import React from 'react';
import { Container } from '../../../components/Container';
import { MyPhoto } from '../../../components/myPhoto/MyPhoto';
import { SectionTitle } from '../../../components/SectionTitle';
import { S } from "./About_Styles";
import { FlexWrapper } from '../../../components/FlexWapper';
import { ParticlesBg } from '../../../components/particlesBg/ParticlesBg';
import { Technologies } from '../home/section/technologies/Technologies';
import { ScrollPageUp } from '../../../components/ScrollPageUp';

export const About: React.FC = () => {
    ScrollPageUp();
    
    return (
        <>
            <ParticlesBg />

            <S.About>
                <Container>
                    <SectionTitle>About me</SectionTitle>

                    <FlexWrapper justify="space-between" alight="flex-start" gap='100px'>
                        <S.AboutText>
                            <p>Hello, I'm Valery!</p>
                            <p>My experience includes working with technologies such as HTML5, CSS3, JavaScript, and various frameworks and libraries such as React.js and Vue.js. I am confident in modern development tools such as Git, Webpack, and npm, which allows me to efficiently organize my workflow and achieve optimal results.</p>
                            <p>One of my key principles is to focus on user experience and usability. I strive to create interfaces that are not only functional, but also enjoyable to use, providing users with ease of navigation and understanding of the content.</p>
                            <p>My goal is not just to create websites, but to create entire web platforms and applications that inspire and improve the lives of users. I constantly study new technologies and best practices to stay up to date with the latest trends in web development and provide cutting-edge solutions for my projects.</p>
                            <p>I am passionate about opening new horizons in the world of web development and am always open to new opportunities and challenges.</p>
                        </S.AboutText>

                        <MyPhoto />
                    </FlexWrapper>
                </Container>
            </S.About>

            <Technologies />
        </>
    );
};