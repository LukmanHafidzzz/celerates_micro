import React, { useState } from 'react'

// library
import { Image } from 'react-bootstrap'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

// css
import '../assets/LandingSection.css'
import '../assets/Global.css'

export default function LandingSection1({ handlePrevClick, handleNextClick, splideRef }) {
    var splideOptions = {
        arrows: false,
        type: 'loop',
        autoplay: true,
        pauseOnHover: false,
        interval: 3000,
        speed: 1000,
        pagination: false,
        arrowPath: '',
    };

    return (
        <Splide
            aria-label='My Favorite Images'
            options={splideOptions}
            ref={splideRef}
        >
            <SplideSlide>
                <Image src='/images/pexels-pixabay-460736.png' className='img-top' />
            </SplideSlide>
            <SplideSlide>
                <Image src='/images/pexels-judit-agusti-aranda-2362469.png' className='img-top' />
            </SplideSlide>
            <SplideSlide>
                <Image src='/images/pexels-pixabay-277054.png' className='img-top' />
            </SplideSlide>
        </Splide>
    );
}
