import React from 'react'
import { Route, Routes } from 'react-router'
import General from '../components/general/General'
import AboutUs from '../components/aboutUs/AboutUs'
import Bandages from '../features/products/bandages/Bandages'
import Tanzif from '../features/products/tanzif/Tanzif'
import ProductsLayout from '../layout/ProductsLayout'
import SeeMore from '../features/products/seeMore/SeeMore'
import Wetsuits from '../features/products/wetsuits/Wetsuits'
import Tops from '../features/products/tops/Tops'
import Service from '../components/services/Service'
import Partners from '../components/partners/Partners'
import Contact from '../components/contact/Contact'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<General />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/products' element={<ProductsLayout />} >
                <Route path='/products/' element={<Bandages />} />
                <Route path='/products/seeMore' element={<SeeMore />} />
                <Route path='/products/tanzif' element={<Tanzif />} />
                <Route path='/products/wetsuits' element={<Wetsuits />} />
                <Route path='/products/tops' element={<Tops />} />
            </Route>
            <Route path='/services' element={<Service />} />
            <Route path='/partners' element={<Partners />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1 style={{ 'paddingTop': '120px' }}>Error</h1>} />
        </Routes>
    )
}

export default Routing