import phoneIcon from '../assets/contact/phoneIcon.png';

// "Call" bar stuck to the bottom of the screen on phones - tapping it dials the number.
// App has matching bottom padding on phones so the bar never covers the footer.
export default function CallButton() {
    return (
        <a
            className='fixed bottom-0 left-0 z-20 flex items-center justify-center gap-2 w-full h-14
            bg-ink border-t border-gold-dark text-gold text-xl font-semibold tracking-wide
            active:bg-gold active:text-ink
            sm:hidden'
            href='tel:+48505964955'
            aria-label='Zadzwoń do Alfa Motors: 505 964 955'
        >
            <img className='h-5' src={phoneIcon} alt='' />
            Zadzwoń: 505 964 955
        </a>
    );
}
