import { Icon } from "../../../../components/Icon"
import { S } from "./Skill_Styles";

export function Skills(props: { skills: Array<object> }) {
    return (
        <>
            {props.skills.map((item: any, index: number) => {
                return (
                    <S.Skill key={index}>
                        <Icon
                            iconId={item.id}
                            width={item.width}
                            height={item.height}
                            viewBox={item.viewBox}
                        />
                        <p>{item.title}</p>
                    </S.Skill>
                )
            })}
        </>
    )
}