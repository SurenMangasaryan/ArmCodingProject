import React, { useContext, useRef, useState } from 'react'
import Button from '../../button/Button'
import Modal from '../../modal/Modal'
import { MyContext } from '../../../Context'
import './Section.css'

const Section = () => {

    const text = 'ՈՒՂԱՐԿԵԼ'
    const inCorrect = useRef('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [inCorrectDatas, setInCorrectDatas] = useState('');
    const { modalBool, setModalBool, getInputs } = useContext(MyContext);
    const modalDescription = 'ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿՊԱՏԱՍԽԱՆԻ ՁԵԶ ԷԼ․ՓՈՍՏԻ ՄԻՋՈՑՈՎ';

    const inSubmit = (evt) => {
        evt.preventDefault();
        if (name.length >= 3 && email.length >= 5 && message.length >= 0) {
            setModalBool(true);
            setInCorrectDatas('');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setModalBool(false);
            setInCorrectDatas('Մուտքագրեք ճիշտ տվյալներ (անուն >= 3(սիմվոլ),մայլ >= 5(սիմվոլ) ,ազգանուն >= 5(սիմվոլ))');
            inCorrect.current.style.display = 'block';
            inCorrect.current.style.color = 'red';
            inCorrect.current.style.margin = '0px 0px';
        }
    }

    return (
        <section className='fifth-section'>
            {modalBool ? <Modal description={modalDescription} /> : null}
            <div className="fifthSection-left-side">
                <p className='fifthSection-description'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik
                </p>
                <iframe className='map' title='The location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762.0493254001798!2d44.56706073609129!3d40.182422377096266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcb207859c11%3A0x4f0ca978fff7cf0!2s2%20Mikoyan%20St%2C%20Yerevan%200079!5e0!3m2!1sru!2sam!4v1692280183926!5m2!1sru!2sam" onTouchStart={(e) => { e.preventDefault() }} onTouchMove={(e) => { e.preventDefault() }}></iframe>
            </div>
            <div className="fifthSection-right-side">
                <h1 className='contact-now'>ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</h1>
                <form className='contact-form' onSubmit={(event) => {
                    inSubmit(event);
                }}>
                    {modalBool ? null : <p ref={inCorrect} className='description' style={{ 'display': 'none' }} >{inCorrectDatas}</p>}
                    <input type="text" placeholder='Անուն' value={name} className='contact-inputs' onChange={(event) => { getInputs(event, setName) }} />
                    <input type="email" placeholder='Էլ․հասցե' value={email} className='contact-inputs' onChange={(event) => { getInputs(event, setEmail) }} />
                    <input type="text" placeholder='Հաղորդագրություն' value={message} className='contact-inputs' onChange={(event) => { getInputs(event, setMessage) }} />
                    <Button text={text} />
                </form>
            </div>
        </section>
    )
}

export default Section