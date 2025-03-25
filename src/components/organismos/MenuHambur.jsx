import styled from "styled-components";
import { LinksArray, SecondarylinksArray, ToggleTema } from "../../index";
import { NavLink } from "react-router-dom";
import { v } from "../../styles/variables";
import { useState } from "react";

export function MenuHambur() {
    const [click, setClick] = useState(false);
    
    return (
        <Container>
            <NavBar>
                <HamburguerMenu onClick={() => setClick(!click)}>
                    <label className={click ? "toggle active" : "toggle"}>
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                </HamburguerMenu>
                
                <Sidebar $click={click.toString()}>
                    <MenuContent>
                        {LinksArray.map(({ icon, label, to }) => (
                            <div onClick={() => setClick(false)} className="LinkContainer" key={label}>
                                <NavLink to={to} className="Links">
                                    <div className="Linkicon">{icon}</div>
                                    <span>{label}</span>
                                </NavLink>
                            </div>
                        ))}
                        <Divider />
                        {SecondarylinksArray.map(({ icon, label, to }) => (
                            <div onClick={() => setClick(false)} className="LinkContainer" key={label}>
                                <NavLink to={to} className="Links">
                                    <div className="Linkicon">{icon}</div>
                                    <span>{label}</span>
                                </NavLink>
                            </div>
                        ))}
                        <ToggleTema />
                    </MenuContent>
                </Sidebar>
            </NavBar>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    z-index: 100;
`;

const NavBar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100px;
`;

const HamburguerMenu = styled.div`
    position: relative;
    z-index: 1000;
    cursor: pointer;
    padding: 20px;

    .toggle {
        position: relative;
        width: 35px;
        height: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        &.active {
            #bar1 {
                transform: rotate(45deg) translate(8px, 8px);
            }
            #bar2 {
                opacity: 0;
            }
            #bar3 {
                transform: rotate(-45deg) translate(8px, -8px);
            }
        }
    }

    .bars {
        width: 100%;
        height: 3px;
        background-color: ${props => props.theme.text};
        border-radius: 2px;
        transition: all 0.3s ease;
    }
`;

const Sidebar = styled.div`
    position: fixed;
    top: 0;
    left: ${({ $click }) => ($click === "true" ? "0" : "-300px")};
    height: 100vh;
    width: 250px;
    background-color: ${props => props.theme.body};
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 999;
    padding-top: 80px;
`;

const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 15px;

    .LinkContainer {
        padding: 12px;
        border-radius: 8px;
        transition: background-color 0.2s;

        &:hover {
            background-color: ${props => props.theme.bg3};
        }

        .Links {
            display: flex;
            align-items: center;
            gap: 15px;
            color: ${props => props.theme.text};
            text-decoration: none;

            .Linkicon {
                font-size: 1.2rem;
            }
        }
    }
`;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.bg4};
    margin: 15px 0;
`;
