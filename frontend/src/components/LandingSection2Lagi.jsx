import React, { useEffect, useRef, useState } from 'react'

// Library
import { Container, Image } from 'react-bootstrap'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

import Slider from 'react-slick'

// css
import '../assets/LandingSection.css'

export default function LandingSection2() {
    var splideOptions2 = {
        arrows: true,
        type   : 'loop',
        perPage: 3,
        focus  : 'center',
        gap: '2rem',
        autoplay: false,
        speed: 1000,
    };

    return (
        <>
            <Splide aria-label='My Favorite Images' options={splideOptions2}>
                <SplideSlide>
                    <Image src='/images/museum-1.png' className='img-second' />
                </SplideSlide>
                <SplideSlide>
                    <Image src='/images/museum-2.png' className='img-second' />
                </SplideSlide>
                <SplideSlide>
                    <Image src='/images/museum-3.png' className='img-second' />
                </SplideSlide>
            </Splide>
        </>
    );
}