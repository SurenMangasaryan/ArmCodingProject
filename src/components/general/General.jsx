import React from 'react'
import FirstSection from '../../features/general/firstSection/Section'
import SecondSection from '../../features/general/secondSection/Section'
import ThirthSection from '../../features/general/thirthSection/Section'
import FourthSection from '../../features/general/fourthSection/Section'
import FifthSection from '../../features/general/fifthSection/Section'
import './General.css'

const General = () => {
    return (
        <div className='general-page'>
            <FirstSection />
            <SecondSection />
            <ThirthSection />
            <FourthSection />
            <FifthSection />
        </div>
    )
}

export default General