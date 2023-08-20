import React, { useContext } from 'react'
import topAndDown from '../../../assets/images/general/SecondSection/top&down.png'
import leftAndRight from '../../../assets/images/general/SecondSection/left&right.png'
import { v4 as uuidv4 } from 'uuid';
import { MyContext } from '../../../Context';
import Button from '../../button/Button';
import { useNavigate } from 'react-router';
import './Bandages.css'

const Bandages = () => {

    const { bandages } = useContext(MyContext);
    const seeMoreText = 'ՏԵՍՆԵԼ ԱՎԵԼԻՆ';
    const navigate = useNavigate();

    const chechkFunc = (bandage) => {
        if (bandage.text !== undefined) {
            navigate('/products/seeMore')
        }
    }

    return (
        <section className='second-seciton bandages-section'>
            <div className="cards bandages">
                {bandages !== undefined ? bandages.map(bandage => {
                    return (
                        <div className="card" key={uuidv4()}>
                            {bandage.text !== undefined ? <div className='greenBack-div'>
                                <img className='product-greenBack' src={bandage.greenBack} alt="vector-42" />
                                <p className='product-text'>{bandage.text}</p>
                            </div> : null}
                            <div className='wetsuit-div'>
                                <img src={bandage.wetsuit} alt="wetsuit" />
                            </div>
                            <h4 className='product-description'>{bandage.description}</h4>
                            <div className='about-wetsuit'>
                                <div className='cm'>
                                    <div> <img src={topAndDown} alt="topAndDown" /> </div>
                                    <span>{bandage.cm}</span>
                                    <div> <img src={leftAndRight} alt="leftAndRight" /> </div>
                                    <span>{bandage.cm2}</span>
                                </div>
                                <div className='cm'>
                                    <div> <img src={topAndDown} alt="topAndDown" /> </div>
                                    <span>{bandage.cm3}</span>
                                    <div> <img src={leftAndRight} alt="leftAndRight" /> </div>
                                    <span>{bandage.cm4}</span>
                                </div>
                                <div className='cm'>
                                    <div> <img src={topAndDown} alt="topAndDown" /> </div>
                                    <span>{bandage.cm5}</span>
                                    <div> <img src={leftAndRight} alt="leftAndRight" /> </div>
                                    <span>{bandage.cm6}</span>
                                </div>
                            </div>
                            <div className='seeMore'>
                                <div style={{ 'width': '199px' }} onClick={() => { chechkFunc(bandage) }}>
                                    <Button text={seeMoreText} />
                                </div>
                            </div>
                        </div>
                    )
                }) : null}
            </div>
        </section>
    )
}

export default Bandages