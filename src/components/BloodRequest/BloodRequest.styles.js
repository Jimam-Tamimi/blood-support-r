import styled from "styled-components";
import {Flex} from '../../globalStyles'


export const BloodRequestBox = styled.div`
    width: 325px;
    padding-bottom: 15px;

    ${Flex}
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background: var(--secendory-color);
    box-shadow: 0px 0px 15px 2px var(--main-box-shadow-color);

`

export const RequestAddress = styled.div`
    width: 100%;
    height: 180px;
    ${Flex}
    flex-direction: column;
    align-items: flex-start;
    
`

export const RequestDetails = styled.div`
    width: 90%;
    /* min-height: 200px; */
    ${Flex}
    flex-direction: column;
    align-items: flex-start;
    margin: auto;

`

export const Field = styled.p`
    margin: 3px 0px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.4px;
    transition: var(--main-transition) !important;
    color: var(--secendory-text-color);

`

export const Value = styled.span`
    font-weight: 400;
    margin-left: 2px;
`

export const Actions = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 11px;
`