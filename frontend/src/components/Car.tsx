import { useState} from 'react';
import { NavLink } from 'react-router-dom';    
import calendar from '../assets/card/calendar.png';
import engineering from '../assets/card/engineering.png';
import gasoline from '../assets/card/gasoline.png';
import mileage from '../assets/card/mileage.png';
import gif from "../assets/card/loading.gif";

export default function Car(props: any) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
      setIsImageLoaded(true);
    };

    return (
        <div className='Car
            inline-block relative border-2 border-gold-dark/60 bg-panel rounded-[20px] w-[270px] h-[370px] my-3 mx-3 font-bebasFont '>

            {/* Container for a ribbon */}
            <span className={
                (props.state === 'soon' || props.state === 'zarezerwowane') ? 
                'car__container-ribbon--yellow' : (props.state === 'sold' ? 
                'car__container-ribbon--red' : 'car__container-ribbon--green')}>
                {/* The ribbon */}
                <span className={
                    (props.state === 'soon' || props.state === 'zarezerwowane') ? 
                    'bg-amber-500' : (props.state === 'sold' ? 
                    'bg-red-600' : 'bg-green-800')}>
                    {props.state === 'soon' ? 
                        'Już wkrótce!' : (props.state === 'sold' ?
                        'Sprzedane' : props.state === 'zarezerwowane' ?
                        'Zarezerwowane' : props.state)}
                </span>
                {/* The shadow of the container as a pseudoelement ::after here */}
            </span>

            {/* Main photo */}
            <img 
                className="w-full h-[200px] rounded-tl-[20px] rounded-tr-[20px] object-cover"
                src={props.imageSource}
                alt='Solidne auta używane'
                style={isImageLoaded ? {display: 'block'} : {display: 'none'}}
                // loading="lazy"
                onLoad={handleImageLoad}
            />
            <img 
                className="block h-[200px] p-[70px] mx-auto border-b-2 border-gold-dark/60"
                src={gif} 
                alt='Solidne auta używane' 
                style={isImageLoaded ? {display: 'none'} : {display: 'block'}}
            />

            {/* Car's name */}
            <p className='flex items-center justify-center py-px px-2 h-[56px] text-center'>
                <span className='inline-block leading-car-title text-xl align-middle text-silver-light'>{props.title}</span>
            </p>

            {/* Infobox */}
            <div className='relative bottom-1 w-48 h-16 mx-auto'>
                <div className='Car__description__container--odd'>                    
                    <img 
                        className='Car__description__container__img' 
                        src={calendar}
                        alt='Dealer samochodów premium'
                    />
                    {props.year}
                </div>
                <div className='Car__description__container--even'>
                    <img 
                        className='Car__description__container__img' 
                        src={mileage}
                        alt='Samochody z niskim przebiegiem'
                    />
                    {props.mileage}{' km'}
                </div>
                <div className='Car__description__container--odd'>
                    <img 
                        className='Car__description__container__img' 
                        src={engineering}
                        alt='Dealer aut klasy premium w Miechowie'
                    />
                    {props.power}{' KM'}
                </div>
                <div className='Car__description__container--even'>
                    <img 
                        className='Car__description__container__img' 
                        src={gasoline}
                        alt='Auta używane Miechów'
                    />
                    {props.fuel}
                </div>
            </div>

            <NavLink to={`/CarPage/${props.id}`}>
                <p className='w-[97px] h-[34px] leading-[34px] text-center tracking-[0.03em] text-[20px] block mx-auto no-underline btn-gold'>SZCZEGÓŁY</p>
            </NavLink>
        </div>
    )
}