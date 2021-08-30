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
    NavNotification,
} from '../'



export default function Navbar() {
    return (
        <>
            <NavbarWraper>
                <NavSearchForm>
                    <SearchInp />
                    <Submit>Search</Submit>
                </NavSearchForm>
                <NavEndSection>
                    <NavLogout>
                        <IoMdLogOut/>
                    </NavLogout>
                    <NavMessage>
                        <BiMessageRoundedDots />
                    </NavMessage>
                    <NavNotification>
                        <IoNotificationsOutline />
                    </NavNotification>

                </NavEndSection>
            </NavbarWraper>
        </>
    )
}
