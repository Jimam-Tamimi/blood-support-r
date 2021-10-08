import React, {useState} from 'react'
import BloodRequest from '../../components/BloodRequest/BloodRequest'
import RequestDetails from '../../components/RequestDetails/RequestDetails'
import styled from 'styled-components'

import {Flex} from '../../globalStyles'

export default function HelpPeople() {
    const [showRequestDetails, setShowRequestDetails] = useState(false)
    const [requestId, setRequestId] = useState(null)
    return (
        <>
            <RequestDetails showRequestDetails={showRequestDetails} setShowRequestDetails={setShowRequestDetails} requestId={requestId}  setRequestId={setRequestId} />
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
