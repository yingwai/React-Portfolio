import React from "react"
import { S } from "./Menu_Styles";

export const Menu: React.FC = () => {
    return (
        <S.Menu>
            <ul>
                <li>Home</li>
                <li>About me</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </S.Menu>
    )
}