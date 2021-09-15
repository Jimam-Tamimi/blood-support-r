import React from 'react'
import BloodRequest from '../../components/BloodRequest/BloodRequest'
import styled from 'styled-components'

import {Flex} from '../../globalStyles'

export default function HelpPeople() {
    return (
        <>
            <Wrap>
                <BloodRequest />
                <BloodRequest />
                <BloodRequest />
                <BloodRequest />
                <BloodRequest />
                <BloodRequest />
                <BloodRequest />
                <BloodRequest />
                <BloodRequest />
                <BloodRequest />
            </Wrap>
        </>
    )
}

const Wrap = styled.div`
    ${Flex}
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`
