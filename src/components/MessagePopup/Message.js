import React, { useEffect, useRef, useState } from 'react'
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
    EmojiWrap,
} from './MessagePopup.styles'
export default function Message({id, name, image, profileId}) {
 
    const [closeMessageId, setCloseMessageId] = useState(null)
    const [showEmojiOption, setShowEmojiOption] = useState(false)
    const dispatch = useDispatch()
    const handleCloseMessage = id => {
        setCloseMessageId(id)
        setTimeout(() => {
            setCloseMessageId(null)
            dispatch(removeMessage(id))

        }, 400);        
    }


    // code for hiding emoji selector on outside click 
    const refCont = useRef(null)
    const listener = e => {
        if (refCont && !refCont?.current?.contains(e.target)) {
            setShowEmojiOption(false) 
        }
    }

    useEffect(() => {
        if(showEmojiOption){
            window.addEventListener("click", listener)
            return () => {
                window.removeEventListener("click", listener)
            }
        }  
    }, [showEmojiOption ])


    // code for sending message
    const [message, setMessage] = useState('')
    

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
                    <EmojiWrap ref={refCont} show={showEmojiOption}>
                        <Picker onClick={(emoji, e) => {setMessage(message + emoji.native)}} style={{position: "relative",  width: "unset" }} set='facebook' />
                    </EmojiWrap>
                    <EmojiMessageDiv onClick={e => setShowEmojiOption(!showEmojiOption)}>
                        <HiEmojiHappy  />
                    </EmojiMessageDiv>
                    <MessageInputBox value={message} onChange={e=> setMessage(e.target.value)} placeholder="Message" />
                    <EmojiMessageDiv>
                        <IoSend />
                    </EmojiMessageDiv>
                </SendMessaageDiv>
            </MessageWraper>  
        </>
    )
}
