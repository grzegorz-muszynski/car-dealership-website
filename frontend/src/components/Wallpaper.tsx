import { useState, useEffect } from 'react';
import wallpaper1 from '../assets/backgrounds/wallpaper1.webp';
import wallpaper2 from '../assets/backgrounds/wallpaper2.webp';
import wallpaper3 from '../assets/backgrounds/wallpaper3.webp';
import wallpaper4 from '../assets/backgrounds/wallpaper4.webp';
import wallpaper5 from '../assets/backgrounds/wallpaper5.webp';
import wallpaper6 from '../assets/backgrounds/wallpaper6.webp';
import wallpaper7 from '../assets/backgrounds/wallpaper7.webp';
import wallpaper8 from '../assets/backgrounds/wallpaper8.webp';
import wallpaper9 from '../assets/backgrounds/wallpaper9.webp';
import wallpaper10 from '../assets/backgrounds/wallpaper10.webp';

const backgrounds = [
    wallpaper1, wallpaper2, wallpaper3, wallpaper4, wallpaper5,
    wallpaper6, wallpaper7, wallpaper8, wallpaper9, wallpaper10,
];

export default function Wallpaper() {
    const [background1, setBackground1] = useState(0);
    const [background2, setBackground2] = useState(0);
    const [shouldUpdateBackground1, setShouldUpdateBackground1] = useState(true);

    let styling1 = {
        backgroundImage: `url(${backgrounds[background1]})`
    }
    
    let styling2 = {
        backgroundImage: `url(${backgrounds[background2]})`
    }

    // Preloading all backgrounds so a picture doesn't pop in while fading
    useEffect(() => {
        backgrounds.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            // The hidden layer gets the picture following the one currently shown
            if (shouldUpdateBackground1) {
                setBackground1((background2 + 1) % backgrounds.length);
            } else {
                setBackground2((background1 + 1) % backgrounds.length);
            }
            setShouldUpdateBackground1(prevValue => !prevValue);
        }, 5000);

        return () => clearInterval(interval);

    }, [shouldUpdateBackground1, background1, background2]);

    return (
        <div id='wallpaper' className='h-[350px] relative'>
            {/* Background no. 1 */}
            <div
                // When background 1 is waiting for being updated - must be hidden
                className={shouldUpdateBackground1 ? 'wallpaper__pic wallpaper__pic-hidden' : 'wallpaper__pic wallpaper__pic-shown'} 
                style={styling1}
            />
            {/* Background no. 2 */}
            <div
                // When background 1 is waiting for being updated - background 2 is shown
                className={shouldUpdateBackground1 ? 'wallpaper__pic wallpaper__pic-shown' : 'wallpaper__pic wallpaper__pic-hidden'}
                style={styling2}
            />
        </div>
    )
}