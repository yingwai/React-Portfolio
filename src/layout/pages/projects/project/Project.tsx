import { MainButton } from "../../../../components/MainButton"
import { FlexWrapper } from "../../../../components/FlexWapper"
import { S } from "./Project_Styles";
import { ProjectItemDataType } from "../Projects";
import workPrew from "../../../../assets/images/my-work_prew.png";

export type ProjectPropsType = {
    item :ProjectItemDataType
}



export const Project = ({item}: ProjectPropsType) => {    
    return (
        <S.Project>
            <FlexWrapper direction="column">
                <img src={item.imgSrc || workPrew} alt="prew_work" />

                <h3>{item.title}</h3>

                <FlexWrapper direction="column" justify="space-between">
                    <p>{item.description}</p>

                    <FlexWrapper alight="flex-end" gap="10px">
                        <a href={item.demoUrl} target="_blank" rel="noreferrer">
                            <MainButton>View project</MainButton>
                        </a>

                        <a href={item.codeUrl} target="_blank" rel="noreferrer" className="nav-link" 
                            style={{display: item.isCode ? 'none' : 'inline-block'}}>View code</a>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </S.Project>
    )
}