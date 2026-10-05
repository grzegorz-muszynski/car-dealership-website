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

// Each picture is cropped to the wallpaper's shape - "position" decides which part stays visible
// (horizontal% vertical%; 0% = left/top edge, 100% = right/bottom edge), chosen so the cars stay in the frame
const backgrounds = [
    { src: wallpaper1, position: '50% 60%' },  // three BMWs in front of the garage
    { src: wallpaper2, position: '50% 72%' },  // grey BMW in the garage (portrait) - grille
    { src: wallpaper3, position: '50% 90%' },  // two BMWs in the garage
    { src: wallpaper4, position: '50% 60%' },  // BMW in blue light
    { src: wallpaper5, position: '50% 80%' },  // Mercedes and Audi RS6 at sunset
    { src: wallpaper6, position: '50% 70%' },  // three BMWs, front view
    { src: wallpaper7, position: '50% 72%' },  // row of Mercedes cars
    { src: wallpaper8, position: '50% 30%' },  // interior with the lit sunroof
    { src: wallpaper9, position: '50% 85%' },  // Audi RS6 from behind and BMWs
    { src: wallpaper10, position: '50% 55%' }, // three Mercedes GLCs
];

export default function Wallpaper() {
    const [background1, setBackground1] = useState(0);
    const [background2, setBackground2] = useState(0);
    const [shouldUpdateBackground1, setShouldUpdateBackground1] = useState(true);

    let styling1 = {
        backgroundImage: `url(${backgrounds[background1].src})`,
        backgroundPosition: backgrounds[background1].position,
    }

    let styling2 = {
        backgroundImage: `url(${backgrounds[background2].src})`,
        backgroundPosition: backgrounds[background2].position,
    }

    // Preloading all backgrounds so a picture doesn't pop in while fading
    useEffect(() => {
        backgrounds.forEach(({ src }) => {
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
        // Height grows with the screen width (40% of it), so every screen shows a similar crop;
        // limited to 220-540px so it's neither a thin strip on phones nor pushing the offer off-screen on big monitors
        <div id='wallpaper' className='h-[clamp(220px,40vw,540px)] relative'>
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