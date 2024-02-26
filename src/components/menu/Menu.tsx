import React from "react"
import { S } from "./Menu_Styles";
import { NavLink } from "react-router-dom";

export const Menu: React.FC = () => {
    return (
        <S.Menu>
            <ul>
                <li>
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            [
                                "nav-link",
                                isActive ? "active" : "",
                            ].join(" ")
                        }>Home</NavLink>
                </li>
                <li><NavLink to={"/about"} className={"nav-link"}>About me</NavLink></li>
                <li><NavLink to={"/projects"} className={"nav-link"}>Projects</NavLink></li>
                <li><NavLink to={"/contact"} className={"nav-link"}>Contact</NavLink></li>
            </ul>
        </S.Menu>
    )
}