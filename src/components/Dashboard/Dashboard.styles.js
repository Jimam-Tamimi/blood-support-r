import styled from "styled-components";
import {NavLink} from "react-router-dom"
export const DashboardWraper = styled.div`
    width: 255px;
    min-height: 100vh;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: #343a40;
    overflow-y: scroll;
    height: 100vh;
    transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    transform: translateX(${({show}) => show? '0': '-100%'});
    position: absolute;

    
`



export const DashLink = styled(NavLink)`
    /* border: 2px solid red; */
    width: 95%;
    height: 50px;
    min-height: 50px;
    margin: 5px 0px;
    padding: 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2f343a;
    border-radius: 5px;
    transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover{
        background: #272c31;
    }
    &.active{
        background: #dc3545;
    }
    &.active:hover{
        background: #b52a37;
    }

`

export const DashboardLogo = styled(DashLink)`
    height: 70px;
    background: #343a40 !important;
    justify-content: space-between;
    padding: 0px 10px;


`

export const Logo = styled.img`
    width: 25%;
    border-radius: 60%;

`

export const LogoText = styled.p`
    /* right: 30px; */
    font-size: 22px;
`





export const LinkIcon = styled.div`
    width: 18%;
    font-size: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const LinkText = styled.div`
    width: 82%;
    font-size: 17px;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
