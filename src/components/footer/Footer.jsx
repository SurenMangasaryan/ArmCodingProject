import React from 'react'
import footerLogo from '../../assets/images/footer/logo.png'
import { BsTelephoneFill } from 'react-icons/bs'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-top'>
                <div className="logo-footer">
                    <img src={footerLogo} alt="Footer Logo" />
                </div>
                <div className="product-footer">
                    <h3 className='footer-title'>ԱՐՏԱԴՐԱՆՔ</h3>
                    <ul className='footer-list'>
                        <li>ՀԵՂՈՒԿՆԵՐ</li>
                        <li>ՔՍՈՒՔՆԵՐ</li>
                        <li>ՅՈՒՂԵՐ</li>
                        <li>ՈԳԵԹՈՒՐՄԵՐ</li>
                        <li>ՓՈՇԻՆԵՐ</li>
                        <li>ՄԱՇԿԻ ԽՆԱՄՔԻ ՄԻՋՈՑՆԵՐ</li>
                    </ul>
                </div>
                <div className="contact-footer">
                    <h3 className="footer-title">ԿԱՊ ՄԵԶ ՀԵՏ</h3>
                    <div className="footer-contact-abouts">
                        <BsTelephoneFill /> <p className='footer-description'>Զանգահարեք մեզ: +374 90 000 000</p>
                    </div>
                    <div className="footer-contact-abouts">
                        <BsFillEnvelopeFill /> <p className='footer-description'>Էլ հասցե: @mail.ru</p>
                    </div>
                    <div className="footer-contact-abouts">
                        <MdLocationOn /> <p className='footer-description'>Երևան</p>
                    </div>
                </div>
                <div className="find-us-footer">
                    <h3 className='footer-title'>ՓՆՏՐԵՔ ՄԵԶ։</h3>
                    <div className="footer-icons">
                        <AiOutlineInstagram className='footer-icon' />
                        <AiFillTwitterSquare className='footer-icon' />
                        <AiFillFacebook className='footer-icon' />
                    </div>
                </div>
            </div>
            <div className="footer-down">
                <p className='footer-end'>By ArmCoding - © 2022 Բոլոր իրավունքները պաշտպանված են</p>
            </div>
        </footer>
    )
}

export default Footer