import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Routing from '../routing/Routing'
import Footer from '../components/footer/Footer'

const Layout = () => {
    return (
        <>
            <NavBar />
            <Routing />
            <Footer />
        </>
    )
}

export default Layout