import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from '../button/Button';
import { MyContext } from '../../Context';
import './DinamicPartners.css'

const DinamicPartners = (props) => {

    const { partners } = useContext(MyContext);

    return (
        <section className='fourth-seciton'>
            {props.title !== undefined || '' ? <h2 className='partner-title'>{props.title}</h2> : null}
            <div className="partners">
                {partners !== undefined ? partners.map(partner => {
                    return (
                        <div className="partner" key={uuidv4()}>
                            <img src={partner.partnerImg} alt="partner" />
                        </div>
                    )
                }) : null}
            </div>
            {props.buttonText !== undefined || '' ? <Button text={props.buttonText} /> : null}
        </section>
    )
}

export default DinamicPartners