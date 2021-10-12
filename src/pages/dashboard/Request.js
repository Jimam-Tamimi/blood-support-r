import React from 'react'
import Modal from '../../components/Modal/Modal'
import RequestDetails from '../../components/RequestDetails/RequestDetails'
import {Button} from '../../globalStyles'


export default function Request({match}) {
    return (
        <>
            <RequestDetails>
                <Modal actionText="Request" title="Help Request Form" lg info btnText="Help"></Modal>
            </RequestDetails>
        </>
    )
}

//          <Modal info btnText="Send Request" style={{padding: '10px 15px', margin: "0"}}>

// </Modal>