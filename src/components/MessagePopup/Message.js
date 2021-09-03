import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {IoSend, IoClose} from 'react-icons/io5'
import {HiEmojiHappy} from 'react-icons/hi'
import prof from '../../assets/img/prof.jpg'

import 'emoji-mart/css/emoji-mart.css'
import { removeMessage } from '../../redux/messagePop/actions'
import { Picker } from 'emoji-mart'

import { 
    MessageWraper, 
    MessageHeaderTitle,
    MessageDetails,
    MsgProfImg,
    ProfName,
    CloseIconWrap,
    MessagesDiv,
    SendMessaageDiv,
    EmojiMessageDiv,
    EmojiMessage,
    MessageInputBox,
} from './MessagePopup.styles'
export default function Message({id, name, image, profileId}) {

    const [msg, setMsg] = useState('')
    const [closeMessageId, setCloseMessageId] = useState(null)
    const dispatch = useDispatch()
    const handleCloseMessage = id => {
        setCloseMessageId(id)
        setTimeout(() => {
            setCloseMessageId(null)
            dispatch(removeMessage(id))

        }, 400);
    }

    return (
        <>
            <MessageWraper  closeMessageId={closeMessageId} msgId={id} >
                <MessageHeaderTitle>
                    <MessageDetails>
                        <MsgProfImg src={image} />
                        <ProfName to={`/message/${profileId}/`}>{name} {id}</ProfName>
                    </MessageDetails>
                    <CloseIconWrap onClick={() => handleCloseMessage(id)}>
                        <IoClose />
                    </CloseIconWrap>
                </MessageHeaderTitle>
                <MessagesDiv>

                </MessagesDiv>
                <SendMessaageDiv>
                    {/* <Picker set='apple' /> */}
                    <EmojiMessageDiv>
                        <HiEmojiHappy />
                    </EmojiMessageDiv>
                    <MessageInputBox value={msg} onChange={e=> setMsg(e.target.value)} placeholder="Message" />
                    <EmojiMessageDiv>
                        <IoSend />
                    </EmojiMessageDiv>
                </SendMessaageDiv>
            </MessageWraper>  
        </>
    )
}
