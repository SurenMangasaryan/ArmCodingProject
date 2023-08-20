import React, { useContext } from 'react'
import thanksLogo from '../../assets/images/thanksLogo/thanks-logo.png'
import { AiOutlineClose } from 'react-icons/ai'
import { MyContext } from '../../Context'
import './Modal.css'

const Modal = (props) => {

    const { setModalBool } = useContext(MyContext);

    const closeModal = () => {
        setModalBool(false);
    }

    return (
        <div className='modal-box'>
            <div className='modal'>
                <AiOutlineClose className='modal-close' onClick={() => { closeModal() }} />
                <h1 className='modal-title'>ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ</h1>
                <p className='modal-description'>
                    {props.description}
                </p>
                <img src={thanksLogo} alt="thanks logo" />
            </div>
        </div>
    )
}

export default Modal