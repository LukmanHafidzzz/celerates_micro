import React, { useEffect, useRef, useState } from 'react'

// Library
import { Container, Image } from 'react-bootstrap'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

import Slider from 'react-slick'

// css
import '../assets/LandingSection.css'
import '../assets/Global.css'

export default function LandingSection2() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <>
            <div className="">
                <Slider {...settings}>
                    <div className='border'>
                        <Image src='/images/museum-1.png' className='img-size'/>
                    </div>
                    <div className='border'>
                        <Image src='/images/museum-2.png' className='img-size'/>
                    </div>
                    <div className='border'>
                        <Image src='/images/museum-3.png' className='img-size'/>
                    </div>
                    <div className='border'>
                        <Image src='/images/museum-4.png' className='img-size'/>
                    </div>
                </Slider>
            </div>
        </>
    );
}
