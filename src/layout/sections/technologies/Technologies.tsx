import styled from "styled-components"
import { Container } from "../../../components/Container"
import { Skills } from "./skill/Skills"
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWapper";

const aSkillItems = [
    { title: "html5", id: "skill-html5", width: "120", height: "120", viewBox: "0 0 32 32" },
    { title: "css3", id: "skill-css3", width: "120", height: "120", viewBox: "0 0 32 32" },
    { title: "scss", id: "skill-scss", width: "120", height: "120", viewBox: "0 0 32 32" },
    { title: "javascript", id: "skill-js", width: "120", height: "120", viewBox: "0 0 120 120" },
    { title: "typescript", id: "skill-ts", width: "120", height: "120", viewBox: "0 0 120 120" },

    { title: "vue", id: "skill-vue", width: "120", height: "120", viewBox: "2 2 28 28" },
    { title: "vuex", id: "skill-vuex", width: "120", height: "120", viewBox: "2 2 28 28" },
    { title: "nuxt", id: "skill-nuxt", width: "120", height: "120", viewBox: "2 2 28 28" },
    { title: "pinia", id: "skill-pinia", width: "120", height: "120", viewBox: "-20 -20 550 550" },

    { title: "react", id: "skill-react", width: "120", height: "120", viewBox: "0 0 120 120" },
    { title: "react-native", id: "skill-react-native", width: "120", height: "120", viewBox: "0 0 120 120" },
    { title: "styled-components", id: "skill-styled-components", width: "120", height: "120", viewBox: "0 0 120 120" },
    { title: "redux", id: "skill-redux", width: "120", height: "120", viewBox: "0 0 32 32" },
    { title: "git", id: "skill-git", width: "120", height: "120", viewBox: "0 0 32 32" },
];

export const Technologies: React.FC = () => {
    return (
        <StyledTechnologies>
            <Container>
                <SectionTitle>Technologies</SectionTitle>


                <FlexWrapper wrap="wrap" justify="center" alight="center">
                    <Skills skills={aSkillItems} />
                </FlexWrapper>
            </Container>
        </StyledTechnologies>
    )
}

const StyledTechnologies = styled.section``