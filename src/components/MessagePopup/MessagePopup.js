import React from 'react'
// import {IoClose} from 'react-icons/io5'
import prof from '../../assets/img/prof.jpg'
import { 
    MessageWraper, 
    MessageHeaderTitle,
    MessageDetails,
    // FullScreen,
    MsgProfImg,
    ProfName,
    CloseIconWrap,
    CloseIcon,
} from './MessagePopup.styles'

export default function MessagePopup() {
    return (
        <>
            <MessageWraper>
                <MessageHeaderTitle>
                    {/* <FullScreen /> */}
                    <MessageDetails>
                        <MsgProfImg src={prof} />
                        <ProfName to="/jimam">Jimam Tamimi</ProfName>
                    </MessageDetails>
                    <CloseIconWrap>
                        <CloseIcon />
                    </CloseIconWrap>
                </MessageHeaderTitle>
            </MessageWraper>
        </>
    )
}
