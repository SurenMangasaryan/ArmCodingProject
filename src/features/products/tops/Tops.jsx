import React from 'react'
import topAndDown from '../../../assets/images/general/SecondSection/top&down.png'
import leftAndRight from '../../../assets/images/general/SecondSection/left&right.png'
import firstTop from '../../../assets/images/tops/WhatsApp Image 2023-06-10 at 11.30 1.png'
import secondTop from '../../../assets/images/tops/WhatsApp Image 2023-06-10 at 11.30 2.png'
import thirthTop from '../../../assets/images/tops/WhatsApp Image 2023-06-10 at 11.30 3.png'
import Button from '../../button/Button';
import './Tops.css'

const Tops = () => {

    const seeMoreText = 'ՏԵՍՆԵԼ ԱՎԵԼԻՆ';

    return (
        <section className='second-seciton tanfiz-section'>
            <div className="card tops-card">
                <div className='tanfiz-div tops-div'>
                    <img src={firstTop} alt="tops" />
                    <img src={secondTop} alt="tops" />
                    <img src={thirthTop} alt="tops" />
                </div>
                <h4 className='product-description tranzif-description tops-description'>ԹՈՓԵՐ</h4>
                <div className='about-wetsuit tranzif-wetsuits'>
                    <div className='cm tops-cm'>
                        <div> <img src={topAndDown} alt="topAndDown" /> </div>
                        <span>90 սմ</span>
                        <div> <img src={leftAndRight} alt="leftAndRight" /> </div>
                        <span>1000 մ</span>
                    </div>
                    <div className='cm tops-cm'>
                        <div> <img src={topAndDown} alt="topAndDown" /> </div>
                        <span>90 սմ</span>
                        <div> <img src={leftAndRight} alt="leftAndRight" /> </div>
                        <span>2000 մ</span>
                    </div>
                    <div className='cm tops-cm'>
                        <div> <img src={topAndDown} alt="topAndDown" /> </div>
                        <span>120 սմ</span>
                        <div> <img src={leftAndRight} alt="leftAndRight" /> </div>
                        <span>2000 մ</span>
                    </div>
                </div>
                <div className='seeMore'>
                    <Button text={seeMoreText} />
                </div>
            </div>
        </section >
    )
}

export default Tops