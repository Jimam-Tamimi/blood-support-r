import styled, {css} from "styled-components";

import {Link} from 'react-router-dom'
import {IoClose} from 'react-icons/io5'

import {ProfImg} from '../'

const flex = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

const column = css`
    flex-direction: column;
`

const flexStart = css`
    justify-content: flex-start;
`


export const MessageWraper = styled.div`
    width: 300px;
    height: 73vh;
    max-height: 415px;
    min-height: 185px;

    position: fixed;
    bottom: 15px;
    right: 15px;
    background: var(--object-bg-color);
    display: flex;
    ${flex}
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0px 0px 15px 2px #00000061;

`

export const MessageHeaderTitle = styled.div`
    height: 50px;
    width: 100%;
    ${flex}
    justify-content: space-between;
    background: var(--primary-color);
    padding: 0 10px;

`

export const MessageDetails = styled.div`
    ${flex}
    justify-content: flex-start;
`

// export const ProfImg = styled(FullScreen)`

// `
export const MsgProfImg = styled(ProfImg)`
    width: 40px;
    height: 40px;

`

export const ProfName = styled(Link)`
    font-size: 20px;
    font-weight: 500;
    color: var(--primary-text-color);
`

export const CloseIconWrap = styled.div`
    color: var(--primary-text-color);
    ${flex}
    padding: 4px;
    border-radius: 100%;
    font-size: 30px;
    cursor: pointer;
    font-size: 25px;

    &:hover{
        background: var(--primary-hover-color);
    }
    &:active{
        transform: var(--for-active-click);
    }

`

export const CloseIcon = styled(IoClose)`
`