import React from 'react'
import logo from '../../assets/images/navbar/logo.png'
import armFlag from '../../assets/images/navbar/ArmenianFlag.png'
import { AiOutlineDown } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <nav className='nav'>
            <div className='navbar'>
                <div style={{ 'cursor': 'pointer' }} onClick={() => { navigate('/') }}>
                    <img src={logo} alt="Navbar logo" />
                </div>
                <ul className='panels-list'>
                    <NavLink to={'/'}>
                        <li>
                            ԳԼԽԱՎՈՐ
                        </li>
                    </NavLink>
                    <NavLink to={'aboutUs'}>
                        <li>
                            ՄԵՐ ՄԱՍԻՆ
                        </li>
                    </NavLink>

                    <NavLink to={'products'}>
                        <li>
                            ԱՐՏԱԴՐԱՆՔ
                        </li>
                    </NavLink>

                    <NavLink to={'services'}>
                        <li>
                            ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ
                        </li>
                    </NavLink>

                    <NavLink to={'partners'}>
                        <li>
                            ԳՈՐԾԸՆԿԵՐՆԵՐ
                        </li>
                    </NavLink>

                    <NavLink to={'contact'}>
                        <li>
                            ՀԵՏԱԴԱՐՁ ԿԱՊ
                        </li>
                    </NavLink>

                    <li>
                        <div className="flag">
                            <img src={armFlag} alt="Armenian flag" />
                            <AiOutlineDown style={{ 'fontSize': '14px' }} />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar