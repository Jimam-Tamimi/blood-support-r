import React, { useEffect, useRef, useState } from 'react'
import prof from '../../assets/img/prof.jpg'

import {IoMdLogOut} from 'react-icons/io'
import {IoNotificationsOutline} from 'react-icons/io5'
import {BiMessageRoundedDots} from 'react-icons/bi'


import Switch from "react-switch";


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
    ModeWrap,
} from '../'
import { NavNotificationCont } from './Navbar.styles'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../../redux'



export default function Navbar({toggleDash, setDarkMode, darkMode}) {

    // redux
    const dispatch = useDispatch()
    const messages = useSelector(state => state.message)

    const msgRef = useRef(null)
    const notRef = useRef(null)
    
    const [message, setMessage] = useState(false)
    const [notification, setNotification] = useState(false)

    const handleNavMsgClick = (e, id) => {
        e.preventDefault()
        setMessage(false)
        let equal = false
        messages.forEach(val => {
            if(val === id){
                equal = true
            }
        });
        if(!equal){
            dispatch(addMessage(id))
        }
    }
    

    useEffect(() => {
        const toggleOpen = e => {
            if(!notRef.current.contains(e.target) && notification){
                setNotification(false)
            } else if(!msgRef.current.contains(e.target) && message){
                setMessage(false)
            }
        }
        window.addEventListener('click', toggleOpen) 
        return () => {
            window.removeEventListener('click',toggleOpen);

        }
    }, [notification, message])
    
    
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
                    <ModeWrap>
                        <Switch onChange={() => setDarkMode(!darkMode)} checked={darkMode} 
                        onColor="#2f343a"
                        ofColor="rgb(255, 255, 255)"
                        onHandleColor="#ffffff"
                        handleDiameter={25}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={25}
                        width={45}
                        />
                    </ModeWrap>
                    
                    <NavMessageWrap>
                        <NavMessage onClick={() => {setMessage(!message); setNotification(false)}} >
                            <BiMessageRoundedDots />
                        </NavMessage>
                        <NavMessageCont ref={msgRef} message={message}>
                            <DropDownHeading>All Messages</DropDownHeading>
                            <Message onClick={(e) => handleNavMsgClick(e, 123323)} to="/msg/rnghef">
                                <ProfImg src={prof} />
                                <MsgInfo>
                                    <Name>Jimam Tamimi</Name>
                                    <Msg>Jimam Is A Very Good Boy</Msg>
                                </MsgInfo>
                            </Message>
                            <Message onClick={(e) => handleNavMsgClick(e, 454566)} to="/msg/rnghef">
                                <ProfImg src={prof} />
                                <MsgInfo>
                                    <Name>Jimam Tamimi</Name>
                                    <Msg>Jimam Is A Very Good Boy</Msg>
                                </MsgInfo>
                            </Message>
                            <Message onClick={(e) => handleNavMsgClick(e, 1235464323)} to="/msg/rnghef">
                                <ProfImg src={prof} />
                                <MsgInfo>
                                    <Name>Jimam Tamimi</Name>
                                    <Msg>Jimam Is A Very Good Boy</Msg>
                                </MsgInfo>
                            </Message>
                            
                        </NavMessageCont>
                    </NavMessageWrap>
                    <NavNotificationWrap  >
                        <NavNotification   onClick={() => {setNotification(!notification); setMessage(false)}}>
                            <IoNotificationsOutline />
                        </NavNotification>
                        <NavNotificationCont ref={notRef} notification={notification}>
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
