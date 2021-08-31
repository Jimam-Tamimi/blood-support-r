import React from 'react'

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
    NavMessage,
    NavMessageWrap,
    NavMessageCont,
    NavNotificationWrap,
    NavNotification,
    HambBurgerWrap,
    HambBurgerLine,
} from '../'



export default function Navbar({toggleDash}) {
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
                        <NavMessage>
                            <BiMessageRoundedDots />
                        </NavMessage>
                        <NavMessageCont></NavMessageCont>
                    </NavMessageWrap>
                    <NavNotificationWrap>
                        <NavNotification>
                            <IoNotificationsOutline />
                        </NavNotification>
                    </NavNotificationWrap>
                    <NavLogout>
                        <IoMdLogOut/>
                    </NavLogout>

                </NavEndSection>
            </NavbarWraper>
        </>
    )
}
