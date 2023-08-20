import React from 'react'
import wetsuit from '../../../assets/images/seeMore/Group 83.png'
import topAndDown from '../../../assets/images/general/SecondSection/top&down.png'
import leftAndRight from '../../../assets/images/general/SecondSection/left&right.png'
import Button from '../../button/Button'
import './SeeMore.css'
import { useNavigate } from 'react-router'

const SeeMore = () => {

    const description = 'Ետ գնալ'
    const navigate = useNavigate();

    return (
        <>
            <section className='see-more'>
                <div className="see-more-left-side">
                    <img src={wetsuit} alt="wetsuit" />
                </div>
                <div className="see-more-right-side">
                    <h3 className='h3-titles'>բժշկական ԲԻՆՏ ՍՏԵՐԻԼ</h3>
                    <div className='about-wetsuit see-more-wetsuits'>
                        <div className='cm'>
                            <div> <img src={topAndDown} alt="topAndDown" /> </div>
                            <span>16 սմ</span>
                            <div> <img src={leftAndRight} alt="leftAndRight" /> </div>
                            <span>10 մ</span>
                        </div>
                        <div className='cm'>
                            <div> <img src={topAndDown} alt="topAndDown" /> </div>
                            <span>14սմ</span>
                            <div> <img src={leftAndRight} alt="leftAndRight" /> </div>
                            <span>7 մ</span>
                        </div>
                        <div className='cm'>
                            <div> <img src={topAndDown} alt="topAndDown" /> </div>
                            <span>10 սմ</span>
                            <div> <img src={leftAndRight} alt="leftAndRight" /> </div>
                            <span>5մ</span>
                        </div>
                    </div>
                    <p className='description'>
                        Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                    </p>
                </div>
            </section>
            <div className='seeMore' style={{ 'margin': '10px 0' }}>
                <div onClick={() => {navigate(-1)}}>
                    <Button text={description} />
                </div>
            </div>
        </>

    )
}

export default SeeMore