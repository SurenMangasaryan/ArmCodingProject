import React from 'react'
import Button from '../../button/Button'
import working from '../../../assets/images/general/FirstSection/Rectangle 104.png'
import './Section.css'

const Section = () => {

    const buttonText = 'ԿԱՐԴԱԼ ԱՎԵԼԻՆ';

    return (
        <section className='first-section'>
            <div className="left-side">
                <h1 className='first-in-Arm'>ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ</h1>
                <p className='description'>Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող:</p>
                <Button text={buttonText} />
            </div>
            <div className="right-side">
                <img src={working} alt="Working" />
            </div>
        </section>
    )
}

export default Section