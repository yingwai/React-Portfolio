import { Container } from "../../../components/Container"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWapper"
import { Project } from "./project/Project"
import photoWork from "../../../assets/images/my-work_prew.png";
import { S } from "./Projects_Styles";
import React from "react";

type ProjectPropsType = {
    imgSrc: string
    title: string
    description: string
}
const aProject = [
    {
        imgSrc: photoWork,
        title: "Project1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        imgSrc: photoWork,
        title: "Project2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        imgSrc: photoWork,
        title: "Project3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

export const Projects: React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle>Projects</SectionTitle>

                <FlexWrapper justify="space-between" wrap="wrap" gap="42px 10px">
                    {aProject.map((item: ProjectPropsType, index: number) => {
                        return (
                            <Project imgSrc={item.imgSrc} title={item.title} description={item.description} />
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.Projects>
    )
}