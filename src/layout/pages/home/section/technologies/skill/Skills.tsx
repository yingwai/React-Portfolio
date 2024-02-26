import { Icon } from "../../../../../../components/Icon"
import { S } from "./Skill_Styles";
import { Fade } from "react-awesome-reveal";

export function Skills(props: { skills: Array<object> }) {
    return (
        <Fade direction="up" delay={100} cascade={true} damping={0.1} triggerOnce={true}>
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
        </Fade>
    )
}