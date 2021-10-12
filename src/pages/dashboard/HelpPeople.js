import React, {useState} from 'react'
import BloodRequest from '../../components/BloodRequest/BloodRequest'
import RequestDetails from '../../components/RequestDetails/RequestDetails'
import OffCanvas from '../../components/OffCanvas/OffCanvas'
import styled from 'styled-components'
import {Badge, Button, ButtonLink} from '../../globalStyles'

import {Flex} from '../../globalStyles'

export default function HelpPeople() {
    const [showRequestDetails, setShowRequestDetails] = useState(false)
    const [requestId, setRequestId] = useState(null)
    return (
        <>
        <OffCanvas   setShow={setShowRequestDetails}  show={showRequestDetails}>
            <RequestDetails>
                <ButtonLink to="/requests/45/"  style={{padding: '10px 15px', margin: "0"}} >View</ButtonLink>
            </RequestDetails>
        </OffCanvas>
            <Wrap>
                <BloodRequest setShowRequestDetails={setShowRequestDetails} setRequestId={setRequestId} />
                <BloodRequest setShowRequestDetails={setShowRequestDetails} setRequestId={setRequestId} />
                <BloodRequest setShowRequestDetails={setShowRequestDetails} setRequestId={setRequestId} />
                <BloodRequest setShowRequestDetails={setShowRequestDetails} setRequestId={setRequestId} />
                <BloodRequest setShowRequestDetails={setShowRequestDetails} setRequestId={setRequestId} />
                <BloodRequest setShowRequestDetails={setShowRequestDetails} setRequestId={setRequestId} />
                <BloodRequest setShowRequestDetails={setShowRequestDetails} setRequestId={setRequestId} />
                <BloodRequest setShowRequestDetails={setShowRequestDetails} setRequestId={setRequestId} />
                <BloodRequest setShowRequestDetails={setShowRequestDetails} setRequestId={setRequestId} />
                <BloodRequest setShowRequestDetails={setShowRequestDetails} setRequestId={setRequestId} />
            </Wrap>
        </>
    )
}

const Wrap = styled.div`
    ${Flex}
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    
    /* @media only screen and (max-width: 1254px){
      &{
          justify-content: center;
      }
    } */
`



const ButtonDiv = styled.div`
    margin-top: 30px;
`