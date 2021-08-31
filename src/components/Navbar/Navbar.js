import React, { useState } from 'react'
import prof from '../../assets/img/prof.jpg'

import {IoMdLogOut} from 'react-icons/io'
import {IoNotificationsOutline} from 'react-icons/io5'
import {BiMessageRoundedDots} from 'react-icons/bi'


import {
    NavbarWraper,
    NavSearchForm,
    SearchInp,
    Submit,
    NavEndSection,
    NavLogout,
    DropDownHeading,
    NavMessage,
    NavMessageWrap,
    NavMessageCont,
    Message,
    ProfImg,
    MsgInfo,
    Name,
    Msg,
    NavNotificationWrap,
    NavNotification,
    Notification,
    NotImg,
    NotMsg,
    HambBurgerWrap,
    HambBurgerLine,
} from '../'
import { NavNotificationCont } from './Navbar.styles'



export default function Navbar({toggleDash}) {
    const [message, setMessage] = useState(false)
    const [notification, setNotification] = useState(false)
    
    return (
        <>
            <NavbarWraper>
                <HambBurgerWrap onClick={toggleDash}>
                    <HambBurgerLine />
                    <HambBurgerLine />
                    <HambBurgerLine />
                </HambBurgerWrap>
                <NavSearchForm>
                    <SearchInp placeholder="Search" />
                    <Submit>Search</Submit>
                </NavSearchForm>
                <NavEndSection>
                    <NavMessageWrap>
                        <NavMessage onClick={() => {setMessage(!message); setNotification(false)}} >
                            <BiMessageRoundedDots />
                        </NavMessage>
                        <NavMessageCont message={message}>
                            <DropDownHeading>All Messages</DropDownHeading>
                            <Message to="/msg/rnghef">
                                <ProfImg src={prof} />
                                <MsgInfo>
                                    <Name>Jimam Tamimi</Name>
                                    <Msg>Jimam Is A Very Good Boy</Msg>
                                </MsgInfo>
                            </Message>
                            <Message to="/msg/usha">
                                <ProfImg src={prof} />
                                <MsgInfo>
                                    <Name>Jimam 2</Name>
                                    <Msg>Jimam Is A Very Good Boy</Msg>
                                </MsgInfo>
                            </Message>
                            <Message to="/msg/refgbfgf">
                                <ProfImg src={prof} />
                                <MsgInfo>
                                    <Name>Jimam Tamimi</Name>
                                    <Msg>Jimam Is A Very Good Boy</Msg>
                                </MsgInfo>
                            </Message>
                            <Message to="/msg/refgbf">
                                <ProfImg src={prof} />
                                <MsgInfo>
                                    <Name>Jimam Tamimi</Name>
                                    <Msg>Jimam Is A Very Good Boy</Msg>
                                </MsgInfo>
                            </Message>
                            <Message to="/msg/rfgbef">
                                <ProfImg src={prof} />
                                <MsgInfo>
                                    <Name>Jimam Tamimi</Name>
                                    <Msg>Jimam Is A Very Good Boy</Msg>
                                </MsgInfo>
                            </Message>
                            <Message to="/msg/rergtrf">
                                <ProfImg src={prof} />
                                <MsgInfo>
                                    <Name>Jimam Tamimi</Name>
                                    <Msg>Jimam Is A Very Good Boy</Msg>
                                </MsgInfo>
                            </Message>
                            
                            <Message to="/msg/mahsfgbina">
                                <ProfImg src={prof} />
                                <MsgInfo>
                                    <Name>Mahsina</Name>
                                    <Msg>Jimam Is A Very Good Boy</Msg>
                                </MsgInfo>
                            </Message>
                        </NavMessageCont>
                    </NavMessageWrap>
                    <NavNotificationWrap>
                        <NavNotification   onClick={() => {setNotification(!notification); setMessage(false)}}>
                            <IoNotificationsOutline />
                        </NavNotification>
                        <NavNotificationCont notification={notification}>
                            <DropDownHeading>All Notification</DropDownHeading>

                            <Notification to="/msg/rnghef">
                                <NotImg src={prof} />
                                <MsgInfo>
                                    <NotMsg>Jimam Is A Very Good Boy</NotMsg>
                                </MsgInfo>
                            </Notification>
                            
                        </NavNotificationCont>
                    </NavNotificationWrap>
                    <NavLogout>
                        <IoMdLogOut/>
                    </NavLogout>

                </NavEndSection>
            </NavbarWraper>
        </>
    )
}
