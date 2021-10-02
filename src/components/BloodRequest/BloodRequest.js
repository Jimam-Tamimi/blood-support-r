import React from 'react'
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
    
} from './BloodRequest.styles'

import { Button, Badge } from '../../globalStyles'

export default function BloodRequest() {
    const [details, setDetails] = useState({
        'Name': 'Jimam Tamimi',
        'Email': 'jimamtamimi12@gmail.com',
        'Time': '02/1/2006',
        'Number': '01712848736',
        'Addtional Number': '01746348736',
        'Blood Group': 'A+',
        'Description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima qui minus assumenda, accusantium quidem maiores sapiente ipsum. Eligendi illo dolore ',
    })
    
    return (
        <>
            <BloodRequestBox>
                <RequestAddress>

                </RequestAddress>
                <RequestDetails>
                    <NumOfReq style={{width: '100%'}}>
                        <Badge info sm>10</Badge>
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
                            <Button  style={{padding: '10px 15px',}} sm>Report</Button>
                            <Button info style={{padding: '10px 15px',}} sm>Help</Button>
                        </Actions>

                        <NumOfReq>
                            <Badge style={{background: 'transparent', fontSize: '12px', fontWeight: '400', color: 'var(--secondery-text-color)', transition: 'var(--main-transition) !important',}} sm>5 minutes ago</Badge>
                        </NumOfReq>
                    </Wrap>
                    
                </RequestDetails>
            </BloodRequestBox>
        </>
    )
}
