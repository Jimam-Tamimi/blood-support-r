import React, {useEffect, useRef} from 'react'
import { useState } from 'react'
import {
    BloodRequestBox,
    RequestAddress,
    RequestDetails,
    Field,
    Value,
    Wrap,
    Actions,
    NumOfReq,
    DropdownMenu, 
    DropdownLink, 
    LinkIcon, 
    LinkText,
    
} from './BloodRequest.styles'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {FaBan} from 'react-icons/fa'
import Map from '../Map/Map'
import { Button, Badge, IconDiv } from '../../globalStyles'
import {Marker} from 'react-google-maps'
import Dropdown from '../Dropdown/Dropdown'

export default function BloodRequest() {
    const [details, setDetails] = useState({ 
        'Time': '02/1/2006',
        'Blood Group': 'A+',
        'Description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima qui minus assumenda, accusantium quidem maiores sapiente ipsum. Eligendi illo dolore '
    })
    const dropDown = useRef(null)
    const [showDropdown, setShowDropdown] = useState(false)
    const [cords, setCords] = useState({lat:24.0077202, lng:89.2429551})
    
    return (
        <>
            <BloodRequestBox>
                
                <RequestAddress>
                    <Map 
                        coords={cords}  
                        isMarkerShown
                        googleMapURL=" "
                        loadingElement={<div style={{ height: `100%`, width: '100%' }} />}
                        containerElement={<div style={{ height: `100%`, width: '100%' }} />}
                        mapElement={<div style={{ height: `100%`, width: '100%' }} />} 
                        defaultZoom={14}
                    >
                        {
                            <Marker  
                            position={cords} 
                            /> 
                        }
                    </Map> 
                </RequestAddress>
                <RequestDetails> 
                    <NumOfReq style={{width: "100%"}}>
                        <IconDiv onClick={e => setShowDropdown(!showDropdown)} style={{margin: "unset", position: "absolute", top: "-4px", right: "-16px"}} scaleOnHover  width="30px" fontSize="20px" height="30px">
                            <BsThreeDotsVertical/>
                        </IconDiv>
                        <DropdownMenu onClick={e => showDropdown?setShowDropdown(false): ''}  showDropdown={showDropdown} >
                            <DropdownLink >
                                <LinkIcon>
                                    <FaBan/>
                                </LinkIcon>
                                <LinkText>
                                    Report
                                </LinkText>
                            </DropdownLink>
                            <DropdownLink >
                                <LinkIcon>
                                    <FaBan/>
                                </LinkIcon>
                                <LinkText>
                                    Save
                                </LinkText>
                            </DropdownLink>
                        </DropdownMenu>
                    </NumOfReq> 

                    {
                        Object.keys(details).map((key, i) => (
                            <>
                                <Field key={i}>{key}: {key==='Description'? <br/>:''}<Value>{details[key]}</Value></Field>
                            </>
                        ))
                    }
                    <Wrap>
                        <Actions>
                            <Button info style={{padding: '10px 15px', margin: "0"}} sm>Help</Button>
                        </Actions>

                        <NumOfReq>
                            <Badge info sm style={{position: "absolute", width: "max-content", right: "-3px", top: "-28px"}}>10</Badge>
                            <Badge style={{background: 'transparent', fontSize: '12px', fontWeight: '400', color: 'var(--secondery-text-color)', transition: 'var(--main-transition) !important',position: "absolute", width: "max-content", right: "-8.4px", bottom: "-21px"}} sm>5 minutes ago</Badge>
                        </NumOfReq>
                    </Wrap>
                    
                </RequestDetails>
            </BloodRequestBox>
        </>
    )
}
