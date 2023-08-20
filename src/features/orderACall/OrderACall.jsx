import React, { useContext } from 'react'
import Button from '../button/Button'
import { AiOutlineClose } from 'react-icons/ai'
import { MyContext } from '../../Context'
import './OrderACall.css'

const OrderACall = () => {

    const description = 'ՊԱՏՎԻՐԵԼ'
    const { setOrderCallBool, setModalBool } = useContext(MyContext);

    const closeOrderModal = () => {
        setOrderCallBool(false);
    }

    const closeOrderOpenModal = (event) => {
        event.preventDefault();
        setOrderCallBool(false);
        setModalBool(true);
    }

    return (
        <div className='modal-box order-a-call-modal'>
            <div className='modal'>
                <AiOutlineClose className='modal-close order-close' onClick={() => { closeOrderModal() }} />
                <h1 className='modal-title' style={{'fontSize': '35px'}}>Պատվիրել զանգ</h1>
                <form className='order-form' onSubmit={(event) => { closeOrderOpenModal(event) }}>
                    <div className='name-lastName'>
                        <input type="text" placeholder='Անուն' className='contact-inputs order-inputs' />
                        <input type="text" placeholder='Ազգանուն' className='contact-inputs order-inputs' />
                    </div>
                    <input type="text" placeholder='Հեռախեսահամար' className='contact-inputs order-inputs phone-serviceName' />
                    <input type="text" placeholder='Ծառայության անվանումը' className='contact-inputs order-inputs phone-serviceName' />
                    <div style={{ 'width': '199px' }} >
                        <Button text={description} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderACall