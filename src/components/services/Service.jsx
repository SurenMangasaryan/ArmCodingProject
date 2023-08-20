import React, { useContext } from 'react'
import Button from '../../features/button/Button'
import machine from '../../assets/images/general/ThirthSection/Rectangle 102.png'
import medic from '../../assets/images/services/Rectangle 103.png'
import { MyContext } from '../../Context'
import OrderACall from '../../features/orderACall/OrderACall'
import './Service.css'
import Modal from '../../features/modal/Modal'

const Service = () => {

    const buttonText = 'ՊԱՏՎԻՐԵԼ ԶԱՆԳ';
    const modalDescription = 'ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿԱՊ ԿՀԱՍՏԱՏԻ ՁԵԶ ՀԵՏ'
    const { orderCallBool, setOrderCallBool, modalBool } = useContext(MyContext);

    const openOrderModal = () => {
        setOrderCallBool(true);
    }

    return (
        <section className='services'>
            <div className='thirth-section services-section'>
                <div className="left-side">
                    <h1 className='first-in-Arm'>ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</h1>
                    <p className='description service-description'>
                        Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ; Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                    <div style={{ 'width': '199px' }} onClick={() => { openOrderModal() }}>
                        <Button text={buttonText} />
                    </div>
                </div>
                <div style={{ 'backgroundPosition': '365px 120px' }} className="right-side">
                    <img src={machine} alt="Machine" />
                </div>
            </div>
            <div className='thirth-section'>
                <div className="service-left-side">
                    <img src={medic} alt="Medic" />
                </div>
                <div className="service-right-side">
                    <h1 className='first-in-Arm'>ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐ</h1>
                    <p className='description service-description'>
                        Մենք կպատրաստենք արտադրանք ձեր իսկ լոգոյով։
                        orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div style={{ 'width': '199px' }} onClick={() => { openOrderModal() }}>
                        <Button text={buttonText} />
                    </div>
                </div>
            </div>
            {orderCallBool ? <OrderACall /> : null}
            {modalBool ? <Modal description={modalDescription} /> : null}
        </section>
    )
}

export default Service