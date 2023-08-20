import React, { useContext } from 'react'
import { MyContext } from '../../../Context'
import { v4 as uuidv4 } from 'uuid';
import topAndDown from '../../../assets/images/general/SecondSection/top&down.png'
import leftAndRight from '../../../assets/images/general/SecondSection/left&right.png'
import layer from '../../../assets/images/general/SecondSection/layer.png'
import pcs from '../../../assets/images/general/SecondSection/pcs.png'
import Button from '../../button/Button';
import './Section.css'

const Section = () => {

    const { products } = useContext(MyContext);
    const seeMoreText = 'ՏԵՍՆԵԼ ԱՎԵԼԻՆ';
    const seeAllText = 'ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ';

    return (
        <section className='second-seciton'>
            <h2 className='product-title'>ԱՐՏԱԴՐԱՆՔ</h2>
            <div className="cards">
                {products !== undefined ? products.map(product => {
                    return (
                        <div className="card" key={uuidv4()}>
                            {product.text !== undefined ? <div className='greenBack-div'>
                                <img className='product-greenBack' src={product.greenBack} alt="vector-42" />
                                <p className='product-text'>{product.text}</p>
                            </div> : null}
                            <div className='wetsuit-div'>
                                <img src={product.wetsuit} alt="wetsuit" />
                            </div>
                            <h4 className='product-description'>{product.description}</h4>
                            <div className='about-wetsuit'>
                                <div className='cm'>
                                    <div> <img src={topAndDown} alt="topAndDown" /> </div>
                                    <span>{product.cm}</span>
                                    <div> <img src={leftAndRight} alt="leftAndRight" /> </div>
                                    <span>{product.cm2}</span>
                                </div>
                                <div className="layer">
                                    <div> <img src={layer} alt="layer" /> </div>
                                    <span>{product.layer}</span>
                                </div>
                                <div className="pcs">
                                    <div> <img src={pcs} alt="pcs" /> </div>
                                    <span>{product.pcs}</span>
                                </div>
                            </div>
                            <div className='seeMore'>
                                <Button text={seeMoreText} />
                            </div>
                        </div>
                    )
                }) : null}
            </div>
            <Button text={seeAllText} />
        </section>
    )
}

export default Section