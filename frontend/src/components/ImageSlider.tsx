import { useState, useEffect } from 'react';
import chevron from '../assets/imageSlider/chevron-left-red.png';
import chevronBig from '../assets/imageSlider/chevron-left-grey.png';

export default function ImageSlider(props: any) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGalleryDisplayed, setIsGalleryDisplayed] = useState(false);

    const ImageSlideStyle = {
        backgroundImage: `url(${props.slides[currentIndex]})`
    }

    const goToPrevImg = () => {
        const newIndex = (currentIndex === 0) ? props.slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNextImg = () => {
        const newIndex = (currentIndex === props.slides.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const dotsStyle: React.CSSProperties = {
        fontSize: '60px',
        position: 'relative',
        bottom: '3.5px',
    }

    // Auto sliding
    useEffect(() => {
        const interval = setInterval(() => {
            goToNextImg();
        }, 7000);
      
        return () => {
            clearInterval(interval);
        };
    }, [currentIndex]); // goToNextImg changes currentIndex invoking this effect which invokes goToNextImg making loop.
    
    return (
        <div className="relative h-72 max-w-[620px] mx-auto mb-8
        xs:h-96
        lg:inline-block lg:min-w-[620px] slider--custom-margin">
            {/* When there are very few dots (less than one full row) - image shrinks. Must be min-width set above */}

                {/* ---Smaller slider without modal--- */}
            {/* Slide */}
            <div 
                className='container-slider__slider w-full h-full rounded-md bg-center object-cover bg-cover z-10 cursor-pointer' 
                style={ImageSlideStyle}
                onClick={() => setIsGalleryDisplayed(true)}
            ></div>
            
            {/*  Left arrow */}
            <div className="container-slider__arrow container-slider__left-arrow" onClick={goToPrevImg}>
                <img className="container-slider__arrow__img" src={chevron} alt='Samochody premium Miechów'></img>
            </div>

            {/*  Right arrow */}
            <div className="container-slider__arrow container-slider__right-arrow right-0" onClick={goToNextImg}>
                <img className="container-slider__arrow__img rotate-180" src={chevron} alt='Samochody premium Kraków'></img>
            </div>

            {/* Dots */}
            <div className="hidden justify-center flex-wrap px-5
            sm:flex">
                {props.slides.map((slide: string, index: number) => (
                    <div className='px-0.5 text-3xl leading-6 text-gold cursor-pointer'
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={currentIndex === index ? dotsStyle : {}}
                    >
                        &#8226;
                    </div>
                ))} 
            </div>

                {/* --- Bigger slider with modal --- */}
            {/* Background for the modal */}
            <div className="fixed top-0 left-0 w-screen h-screen z-30 bg-black bg-opacity-90"
                style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}} 
                onClick={() => setIsGalleryDisplayed(false)}
            ></div>

            {/*  Closing button */}
            <div className='fixed -top-4 right-0 rotate-45 text-8xl font-light text-white text-opacity-90 cursor-pointer z-50'
                style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}} 
                onClick={() => setIsGalleryDisplayed(false)}
            >+</div>

            {/* Slide */}
            <div className='flex fixed w-full h-4/5 z-40 top-10p left-0 items-center justify-between
            sm:justify-evenly'
                style={isGalleryDisplayed ? {} : {display: 'none'}} 
            >
                {/* Left arrow */}
                <img className='image-slider__big-arrows' 
                    src={chevronBig}
                    alt='Wyselekcjonowane auta premium'
                    onClick={goToPrevImg} 
                    style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}}
                />

                {/* Slide */}
                <img className='absolute w-full h-auto max-h-80vh object-contain
                sm:static sm:w-80vw' src={props.slides[currentIndex]} alt='Dobre auta używane, zaufany dealer' />

                {/* Right arrow */}
                <img 
                    className='image-slider__big-arrows rotate-180'
                    src={chevronBig}
                    alt='Wyselekcjonowane auta topowych marek'
                    onClick={goToNextImg}
                    style={isGalleryDisplayed ? {display: 'block'} : {display: 'none'}}
                />
            </div>
        </div>
    )
}