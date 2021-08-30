import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import Navbar from '../components/Navbar/Navbar'

export default function Layout({children}) {
    return (
        <>
            <Dashboard />
            <Navbar />
            {children}
        </>
    )
}
