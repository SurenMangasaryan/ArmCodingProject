import React from 'react'
import { NavLink } from 'react-router-dom'
import './Products.css'

const Products = () => {
    return (
        <>
            <section className='products-section'>
                <ul className='products-list'>
                    <NavLink to={'/products/'}>
                        <li>ԲԻՆՏԵՐ</li>
                    </NavLink>
                    <NavLink to={'/products/tanzif'}>
                        <li>ԹԱՆԶԻՖԵՐ</li>
                    </NavLink>
                    <NavLink to={'/products/wetsuits'}>
                        <li>ԱՆՋԵՌՈՑԻԿՆԵՐ</li>
                    </NavLink>
                    <NavLink to={'/products/tops'}>
                        <li>ԹՈՓԵՐ</li>
                    </NavLink>
                </ul>
            </section>
        </>

    )
}

export default Products