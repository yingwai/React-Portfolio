import { Container } from "../../../../../components/Container"
import { SectionTitle } from "../../../../../components/SectionTitle"
import { FlexWrapper } from "../../../../../components/FlexWapper"
import { Project } from "../../../projects/project/Project"
import { S } from "./Projects_Styles";
import React from "react";
import { ProjectItemDataType, aAllListProject } from "../../../projects/Projects";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const aListProject = aAllListProject.slice(0, 2);

export const Projects: React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle>Projects</SectionTitle>

                <FlexWrapper direction="column" alight="center" gap="60px">
                    <FlexWrapper justify="space-between" wrap="wrap" gap="42px 10px">
                        <Fade direction="up" cascade={true} delay={100} damping={0.1} triggerOnce={true}>
                            {aListProject.map((item: ProjectItemDataType) => {
                                return (
                                    <Project item={item} />
                                )
                            })}
                        </Fade>
                    </FlexWrapper>

                    <Fade direction="up" delay={150}>
                        <NavLink to={"/projects"} className={"nav-link"}>View all projects</NavLink>
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Projects>
    )
}