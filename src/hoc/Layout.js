import React, { useEffect, useRef } from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import Navbar from '../components/Navbar/Navbar'
import { Container, Wraper } from '../globalStyles'
import { useState } from 'react'

export default function Layout({children}) {
    let width = window.innerWidth
    const [show, setShow] = useState(width <= 748? false: true)

    const [smallDevice, setSmallDevice] = useState(width <= 748? true: false)

    const toggleDash = () => {
        setShow(!show)
    }

    const toggleDashOnSmallDevice = () => {
        if(smallDevice){
            setShow(!show)
        }
    }

    
    window.addEventListener('resize', () => {
        let width = window.innerWidth
        if(width <= 748){
            setSmallDevice(true)
            setShow(false)
        } else{
            setSmallDevice(false)
            setShow(true)
        }
    })
    


    return (
        <>
            <Wraper>
                
                <Dashboard  toggleDashOnSmallDevice={toggleDashOnSmallDevice} show={show} />

                <Container onClick={() => smallDevice && show?setShow(false):null}  smallDevice={smallDevice} show={show}>
                    <Navbar toggleDash={toggleDash} />
                    {children}
                </Container>
            </Wraper>
        </>
    )
}
