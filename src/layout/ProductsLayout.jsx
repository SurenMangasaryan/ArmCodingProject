import React from 'react'
import Products from '../components/products/Products'
import { Outlet } from 'react-router'

const ProductsLayout = () => {
    return (
        <>
            <Products />
            <Outlet />
        </>
    )
}

export default ProductsLayout