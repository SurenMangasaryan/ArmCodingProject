import React, { createContext, useState } from 'react'
import wetsuit from '../src/assets/images/general/SecondSection/wetsuit.png'
import greenBack from '../src/assets/images/general/SecondSection/Vector 42.png'
import partner from '../src/assets/images/general/FourthSection/partner.png'

export const MyContext = createContext();

const Context = ({ children }) => {

    const [modalBool, setModalBool] = useState();
    const [orderCallBool, setOrderCallBool] = useState();

    const products = [
        {
            text: 'ՍՏԵՐԻԼ',
            greenBack: greenBack,
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
            cm: '7.5 սմ',
            cm2: '7.5 սմ',
            layer: '12 շերտ',
            pcs: '10 հատ'
        },
        {
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ (ինդիվիդուալ)',
            cm: '7.5 սմ',
            cm2: '7.5 սմ',
            layer: '8 շերտ',
            pcs: '10 հատ'
        },
        {
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
            cm: '5 սմ',
            cm2: '5 սմ',
            layer: '12 շերտ',
            pcs: '100 հատ'
        },
        {
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
            cm: '5 սմ',
            cm2: '5 սմ',
            layer: '8 շերտ',
            pcs: '100 հատ'
        },
        {
            text: 'ՍՏԵՐԻԼ',
            greenBack: greenBack,
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
            cm: '5 սմ',
            cm2: '5 սմ',
            layer: '12 շերտ',
            pcs: '10 հատ'
        },
        {
            text: 'ՍՏԵՐԻԼ',
            greenBack: greenBack,
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
            cm: '5 սմ',
            cm2: '5 սմ',
            layer: '8 շերտ',
            pcs: '10 հատ'
        }
    ]

    const partners = [
        {
            partnerImg: partner
        },
        {
            partnerImg: partner
        },
        {
            partnerImg: partner
        },
        {
            partnerImg: partner
        },
        {
            partnerImg: partner
        },
        {
            partnerImg: partner
        }
    ]

    const bandages = [
        {
            text: 'ՍՏԵՐԻԼ',
            greenBack: greenBack,
            wetsuit: wetsuit,
            description: 'բժշկական բինտ  ՍՏԵՐԻԼ',
            cm: '16սմ',
            cm2: '10մ',
            cm3: '14սմ',
            cm4: '7մ',
            cm5: '10սմ',
            cm6: '5մ'
        },
        {
            wetsuit: wetsuit,
            description: 'բժշկական բինտ ոչ ՍՏԵՐԻԼ',
            cm: '16սմ',
            cm2: '10մ',
            cm3: '14սմ',
            cm4: '7մ',
            cm5: '10սմ',
            cm6: '5մ'
        }
    ]

    const wetsuits = [
        {
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
            cm: '10 սմ',
            cm2: '10 սմ',
            layer: '12 շերտ',
            pcs: '100 հատ'
        },
        {
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
            cm: '10 սմ',
            cm2: '10 սմ',
            layer: '8 շերտ',
            pcs: '100 հատ'
        },
        {
            text: 'ՍՏԵՐԻԼ',
            greenBack: greenBack,
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
            cm: '10 սմ',
            cm2: '10 սմ',
            layer: '12 շերտ',
            pcs: '5 հատ'
        },
        {
            text: 'ՍՏԵՐԻԼ',
            greenBack: greenBack,
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
            cm: '10 սմ',
            cm2: '10 սմ',
            layer: '8 շերտ',
            pcs: '5 հատ'
        },
        {
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
            cm: '7.5 սմ',
            cm2: '7.5 սմ',
            layer: '12 շերտ',
            pcs: '100 հատ'
        },
        {
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
            cm: '7.5 սմ',
            cm2: '7.5 սմ',
            layer: '8 շերտ',
            pcs: '100 հատ'
        },
        {
            text: 'ՍՏԵՐԻԼ',
            greenBack: greenBack,
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
            cm: '7.5 սմ',
            cm2: '7.5 սմ',
            layer: '12 շերտ',
            pcs: '10 հատ'
        },
        {
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
            cm: '7.5 սմ',
            cm2: '7.5 սմ',
            layer: '8 շերտ',
            pcs: '10 հատ'
        },
        {
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
            cm: '5 սմ',
            cm2: '5 սմ',
            layer: '12 շերտ',
            pcs: '100 հատ'
        },
        {
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
            cm: '5 սմ',
            cm2: '5 սմ',
            layer: '8 շերտ',
            pcs: '100 հատ'
        },
        {
            text: 'ՍՏԵՐԻԼ',
            greenBack: greenBack,
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
            cm: '5 սմ',
            cm2: '5 սմ',
            layer: '12 շերտ',
            pcs: '10 հատ'
        },
        {
            text: 'ՍՏԵՐԻԼ',
            greenBack: greenBack,
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
            cm: '5 սմ',
            cm2: '5 սմ',
            layer: '8 շերտ',
            pcs: '10 հատ'
        },
        {
            text: 'ՍՏԵՐԻԼ',
            greenBack: greenBack,
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
            cm: '16 սմ',
            cm2: '14 սմ',
            layer: '2 շերտ',
            pcs: '10 հատ'
        },
        {
            text: 'ՍՏԵՐԻԼ',
            greenBack: greenBack,
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
            cm: '16 սմ',
            cm2: '14 սմ',
            layer: '2 շերտ',
            pcs: '10 հատ'
        },
        {
            text: 'ՍՏԵՐԻԼ',
            greenBack: greenBack,
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
            cm: '45 սմ',
            cm2: '29 սմ',
            layer: '2 շերտ',
            pcs: '5 հատ'
        },
        {
            text: 'ՍՏԵՐԻԼ',
            greenBack: greenBack,
            wetsuit: wetsuit,
            description: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
            cm: '45 սմ',
            cm2: '29 սմ',
            layer: '2 շերտ',
            pcs: '5 հատ'
        }
    ]

    const getInputs = (evt, func) => {
        func(evt.target.value);
    }

    const values = {
        products, partners,
        modalBool, setModalBool,
        bandages, wetsuits,
        orderCallBool, setOrderCallBool,
        getInputs
    };

    return (
        <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>
    )
}

export default Context