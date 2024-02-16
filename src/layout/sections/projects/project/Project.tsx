import { MainButton } from "../../../../components/MainButton"
import { FlexWrapper } from "../../../../components/FlexWapper"
import { S } from "./Project_Styles";

type ProjectPropsType = {
    imgSrc: string
    title: string
    description: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <FlexWrapper direction="column">
                <img src={props.imgSrc} alt="prew_work" />

                <h3>{props.title}</h3>

                <FlexWrapper direction="column" justify="space-between">
                    <p>{props.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quas!</p>

                    <MainButton>Look It Up</MainButton>
                </FlexWrapper>
            </FlexWrapper>
        </S.Project>
    )
}