import { MainButton } from "../../../../components/MainButton"
import { FlexWrapper } from "../../../../components/FlexWapper"
import { S } from "./Project_Styles";

export type ProjectPropsType = {
    projectInfo: {
        id: number
        imgSrc: string
        title: string
        description: string,
        demoUrl: string,
        codeUrl: string,
        isCode?: boolean
    }
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <FlexWrapper direction="column">
                <img src={props.projectInfo.imgSrc} alt="prew_work" />

                <h3>{props.projectInfo.title}</h3>

                <FlexWrapper direction="column" justify="space-between">
                    <p>{props.projectInfo.description}</p>

                    <FlexWrapper alight="flex-end" gap="10px">
                        <a href={props.projectInfo.demoUrl} target="_blank" rel="noreferrer">
                            <MainButton>View project</MainButton>
                        </a>

                        <a href={props.projectInfo.codeUrl} target="_blank" rel="noreferrer" className="nav-link" 
                            style={{display: props.projectInfo.isCode ? 'none' : 'inline-block'}}>View code</a>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </S.Project>
    )
}