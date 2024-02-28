import React from 'react';
import { S } from "./Projects_Styles";
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWapper';
import { Project } from './project/Project';
import { ScrollPageUp } from '../../../components/ScrollPageUp';
import { Fade } from "react-awesome-reveal";

import TargetCubePrew from "../../../assets/images/TargetCube_Prew.png";
import ToysStorePrew from "../../../assets/images/ToysStore_Prew.png";
import RegistrationFormPrew from "../../../assets/images/RegistrationForm_Prew.png";
import HTMLTestTask2Prew from "../../../assets/images/HTMLTestTask2_Prew.png";
import SSSCleaningPrew from "../../../assets/images/SSSCleaning_Prew.png";
import SkyRiftersPrew from "../../../assets/images/SkyRifters_Prew.png";



export type ProjectItemDataType = {
    id: number
    imgSrc: string
    title: string
    description: string,
    demoUrl: string,
    codeUrl: string,
    isCode?: boolean
}

export const aAllListProject: ProjectItemDataType[] = [
    {
        id: 0,
        imgSrc: TargetCubePrew,
        title: "Target Cube",
        description: "A small game created at the very beginning of the journey and remains here as a pleasant memory.",
        demoUrl: "https://yingwai.github.io/Target-Cube/",
        codeUrl: "https://github.com/yingwai/Target-Cube"
    },
    {
        id: 1,
        imgSrc: ToysStorePrew,
        title: "Toys Store",
        description: "Toy store made in Vue. Fully functional with customizable catalog, news, promotions, etc. There is an admin panel for setting up the product and viewing users.",
        demoUrl: "https://yingwai.github.io/Toys_Store/",
        codeUrl: "https://github.com/yingwai/Toys_Store"
    },
    {
        id: 2,
        imgSrc: RegistrationFormPrew,
        title: "Registration form in HTML",
        description: "A small pixel perfect registration form in pure HTML and CSS with animations and data verification.",
        demoUrl: "https://yingwai.github.io/HTMLTestTask/",
        codeUrl: "https://github.com/yingwai/HTMLTestTask/tree/m-1"
    },
    {
        id: 3,
        imgSrc: HTMLTestTask2Prew,
        title: "One page website in Vue",
        description: "Website in Vue using animation, responsiveness, language switching, etc.",
        demoUrl: "https://yingwai.github.io/HTMLTestTask2/",
        codeUrl: "https://github.com/yingwai/HTMLTestTask2"
    },
    {
        id: 4,
        imgSrc: SSSCleaningPrew,
        title: "Cleaning website in Vue",
        description: "A small site in Vue using storage, localstorage and cookies, also Emailjs for contact.",
        demoUrl: "https://yingwai.github.io/HtmlTestTaskAG/",
        codeUrl: "https://github.com/yingwai/HtmlTestTaskAG"
    },
    {
        id: 5,
        imgSrc: SkyRiftersPrew,
        title: "SkyRifters",
        description: "Website for Minecraft server on Nuxt. Various pages have been implemented: store, forum, leaderboard, profile, etc. Implemented registration, authorization and email confirmation. And much more.",
        demoUrl: "https://skyrifters.net/",
        codeUrl: "https://github.com/yingwai/HtmlTestTaskAG",
        isCode: true
    },
]

export const Projects: React.FC = () => {
    ScrollPageUp();

    return (
        <S.Projects>
            <Container>
                <SectionTitle>Projects</SectionTitle>

                <FlexWrapper justify="center" wrap="wrap" gap="42px 10px">
                    <Fade direction="up" delay={100} triggerOnce={true}>
                        {aAllListProject.map((item: ProjectItemDataType) => {
                            return (
                                <Project item={item} />
                            )
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};