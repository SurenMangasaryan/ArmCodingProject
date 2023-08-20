import React from 'react'
import machine from '../../../assets/images/general/ThirthSection/Rectangle 102.png'
import Button from '../../button/Button';

const Section = () => {

    const buttonText = 'ԿԱՐԴԱԼ ԱՎԵԼԻՆ';

    return (
        <section className='thirth-section'>
            <div className="left-side">
                <h1 className='first-in-Arm'>ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</h1>
                <p className='description'>Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ:</p>
                <Button text={buttonText} />
            </div>
            <div className="right-side">
                <img src={machine} alt="Machine" />
            </div>
        </section>
    )
}

export default Section