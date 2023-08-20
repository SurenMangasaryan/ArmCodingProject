import React from 'react'
import topAndDown from '../../../assets/images/general/SecondSection/top&down.png'
import leftAndRight from '../../../assets/images/general/SecondSection/left&right.png'
import tanfizImage from '../../../assets/images/tanfiz/f46cc2265708f1cd4c744f3eb21a984d9bec97fded4ee16f236ba4101a97db5d.png'
import Button from '../../button/Button';
import './Tanzif.css'

const Tanzif = () => {

    const seeMoreText = 'ՏԵՍՆԵԼ ԱՎԵԼԻՆ';

    return (
        <section className='second-seciton tanfiz-section'>
            <div className="card">
                <div className='tanfiz-div'>
                    <img src={tanfizImage} alt="wetsuit" />
                </div>
                <h4 className='product-description tranzif-description'>բժշկական թանզիֆ ոչ ՍՏԵՐԻԼ</h4>
                <div className='about-wetsuit tranzif-wetsuits'>
                    <div className='cm'>
                        <div> <img src={topAndDown} alt="topAndDown" /> </div>
                        <span>90 սմ</span>
                        <div> <img src={leftAndRight} alt="leftAndRight" /> </div>
                        <span>3 մ</span>
                    </div>
                    <div className='cm'>
                        <div> <img src={topAndDown} alt="topAndDown" /> </div>
                        <span>90 սմ</span>
                        <div> <img src={leftAndRight} alt="leftAndRight" /> </div>
                        <span>5 մ</span>
                    </div>
                    <div className='cm'>
                        <div> <img src={topAndDown} alt="topAndDown" /> </div>
                        <span>90 սմ</span>
                        <div> <img src={leftAndRight} alt="leftAndRight" /> </div>
                        <span>10 մ</span>
                    </div>
                </div>
                <div className='seeMore'>
                    <Button text={seeMoreText} />
                </div>
            </div>
        </section >
    )
}

export default Tanzif