import styled, {css} from "styled-components";
import {Flex} from '../../globalStyles'
import Dropdown from "../Dropdown/Dropdown";


export const BloodRequestBox = styled.div`
    width: 460px;
    padding-bottom: 15px;
    margin: 15px 10px;
    ${Flex}
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background: var(--object-bg-color);
    box-shadow: 0px 0px 15px 2px var(--main-box-shadow-color);
    @media only screen and (min-width: 1255px){
      &{
        width: 47%;
      }
    }
    @media only screen and (min-width: 1800px){
      &{
        width: 30%;
      }
    }
    @media only screen and (max-width: 1254px){
      &{
        width: 400px;
      }
    }
    @media only screen and (max-width: 1130px){
      &{
        width: 350px;
      }
    }
    @media only screen and (max-width: 1026px){
      &{
        width: 300px;
      }
    }
    @media only screen and (max-width: 922px){
      &{
        width: 100%;
        
      }
    }
`

export const RequestAddress = styled.div`
    width: 100%;
    height: 300px;
    ${Flex}
    flex-direction: column;
    align-items: flex-start;
    @media only screen and (max-width: 922px){
      &{
        height: 350px;
      }
    }
    @media only screen and (min-width: 1254px){
      &{
        height: 350px;
      }
    }
    
`

export const RequestDetails = styled.div`
    width: 90%;
    /* min-height: 200px; */
    ${Flex}
    flex-direction: column;
    align-items: flex-start;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 15px;


`

export const Field = styled.p`
    margin: 5px 0px;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.4px;
    transition: var(--main-transition) !important;
    color: var(--secendory-text-color);

`

export const Value = styled.span`
    font-weight: 400;
    margin-left: 2px;
`

export const Wrap = styled.div`
    width: 100%;
   ${Flex}
   justify-content: space-between;
   align-items: flex-end;

`

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 11px;
`
 
export const NumOfReq = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
`
 
 
export const DropdownMenu = styled.div`
    width: 120px;
    padding: 3px 0px;
    position: absolute;
    background: var(--secendory-color);
    top: 8px;
    right: 15px;
    ${({showDropdown}) => showDropdown?` 
        opacity: 1;
        transform: translateX(-10px);
        z-index: 10;
        `:` 
        opacity: 0;
        transform: translateX(0px);
        z-index: -20;
    `}
   
`
 
 
export const DropdownLink = styled.div`
    width: 100%;
    height: 35px;
    margin: 3px auto;

    padding: 0px 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secendory-color);
    border-radius: 5px;
    transition: var(--main-transition);
    position: relative;
    z-index: 1;
    cursor: pointer;



    &:hover::after{
        background: var(--secendory-hover-color);
        transform: scaleX(1);
        opacity: 1;
    }
    &:active{
        transform: var(--for-active-click);
    }
    &::after{
        opacity: .6;
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        transition: var(--main-transition);
        transform: scaleX(0);
        z-index: -2;

    }

    &.active{
        background: var(--primary-color) !important;
        color: var(--primary-text-color) !important;
    }
    &.active:hover::after{
        background: var(--primary-hover-color);
        transform: scaleX(1);
    }
   
`
 
 
export const LinkIcon = styled.div`
    width: 30%;
    font-size: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 100;
    color: var(--primary-color);

`
 
export const LinkText = styled.div`
    width: 82%;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 100;
    color: inherit;
`
 
