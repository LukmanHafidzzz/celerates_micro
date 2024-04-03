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
    var splideOptions2 = {
        // arrows: true,
        // type   : 'loop',
        // perPage: 3,
        // focus  : 'center',
        // gap: '2rem',
        // autoplay: false,
        // speed: 1000,
        // pagination: false,
        arrows: false,
        type: 'loop',
        perPage: 1,
        padding: '15rem',
        focus: 'center',
        gap: '3rem',
        pagination: false,
        speed: 1000,
    };

    return (
        <>
            <Splide aria-label='My Favorite Images' options={splideOptions2}>
                <SplideSlide>
                    <Image src='/images/museum-1.png' className='img-second' />
                    <div data-aos="fade-up" data-aos-duration='1000'>
                        <h4 className='fw-medium mt-4 text-center'>
                            Museum Indonesia
                        </h4>
                        <Container className='text-grey text-justify'>
                            Museum Nasional Indonesia, atau yang sering disebut dengan Museum Gajah, adalah sebuah museum arkeologi, sejarah, etnografi, dan geografi yang terletak di Jakarta Pusat dan persisnya di Jalan Merdeka Barat 12. Museum ini merupakan museum pertama dan terbesar di Asia Tenggara.
                        </Container>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <Image src='/images/museum-2.png' className='img-second' />
                    <div data-aos="fade-up" data-aos-duration='1000'>
                        <h4 className='fw-medium mt-4 text-center'>
                            Museum Indonesia
                        </h4>
                        <Container className='text-grey text-justify'>
                            Museum Nasional Indonesia, atau yang sering disebut dengan Museum Gajah, adalah sebuah museum arkeologi, sejarah, etnografi, dan geografi yang terletak di Jakarta Pusat dan persisnya di Jalan Merdeka Barat 12. Museum ini merupakan museum pertama dan terbesar di Asia Tenggara.
                        </Container>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <Image src='/images/museum-3.png' className='img-second' />
                    <div data-aos="fade-up" data-aos-duration='1000'>
                        <h4 className='fw-medium mt-4 text-center'>
                            Museum Indonesia
                        </h4>
                        <Container className='text-grey text-justify'>
                            Museum Nasional Indonesia, atau yang sering disebut dengan Museum Gajah, adalah sebuah museum arkeologi, sejarah, etnografi, dan geografi yang terletak di Jakarta Pusat dan persisnya di Jalan Merdeka Barat 12. Museum ini merupakan museum pertama dan terbesar di Asia Tenggara.
                        </Container>
                    </div>
                </SplideSlide>
            </Splide>
        </>
    );
}