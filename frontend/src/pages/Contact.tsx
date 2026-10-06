import phoneIcon from '../assets/contact/phoneIcon.png';
import emailIcon from '../assets/contact/email.png';

export default function Contact() {

    return (
        <div id="Contact" className="flex flex-col-reverse w-full pb-16 font-bebasFont
        lg:flex-row lg:mx-auto lg:max-w-5xl">
            <span className='w-11/12 mx-auto text-lg
            sm:w-[36rem]
            lg:w-6/12 lg:mr-5
            xl:mr-10'>
                <h3 className="contact__container__title">Formularz kontaktu</h3>

                <form className="text-lg" action="https://formsubmit.co/alfamotors.kontakt@gmail.com" method="POST">
                    <input className='contact__container__form__input contact__container__form__input-contour' type="text" name="Imię" placeholder='Imię' required/>
                    <input className='contact__container__form__input contact__container__form__input-contour' type="text" name="Nazwisko" placeholder='Nazwisko' required/>
                    <input className='contact__container__form__input contact__container__form__input-contour' type="text" name="Numer telefonu" placeholder='Numer telefonu' />
                    <input className='contact__container__form__input contact__container__form__input-contour' type="email" name="Adres e-mail" placeholder='Adres e-mail' required/>

                    {/* Text box */}
                    <textarea className='contact__container__form__input contact__container__form__input-contour h-48' name="Wiadomość" placeholder='Treść' required rows={4} />

                    {/* Button replaced with <input> for Safari browser */}
                    <input className="contact__container__form__input
                    contact__container__form__input-contour-contour
                    block my-1 mx-auto pt-0.5 w-16 tracking-wide btn-gold" id='contact-area__button' type='submit' value='WYŚLIJ' />

                    <input className='contact__container__form__input contact__container__form__input-contour' type="hidden" name="_subject" value="Klient przysłał zapytanie"></input>
                    <input className='contact__container__form__input contact__container__form__input-contour' type="hidden" name="_next" value="https://alfamotors.pl/thanks"></input>
                </form>
            </span>

            <span className='w-11/12 mx-auto text-lg
            sm:w-[36rem]
            lg:w-5/12 lg:ml-0'>
                <h3 className='contact__container__title'>Informacje kontaktowe</h3>
                
                <div className="flex text-center">
                    <img className="relative top-1 h-4 pr-2" src={phoneIcon} alt="Wiarygodni dealerzy samochodów używanych" />
                    <span>Telefon: +48 505 964 955</span>
                </div>
                <div className="flex text-center">
                    <img className="relative top-1 h-4 pr-2" src={emailIcon} alt="Używane auta dobrej jakości" />
                    <span>E-mail: alfamotors.kontakt@gmail.com</span>
                </div>

                {/* Map */}
                <iframe className="block my-2 mx-auto h-72 w-full border border-gold-dark rounded-md
                lg:h-64" title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1555473.3398993865!2d19.0236861221721!3d50.1859647846431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abd77be7063d%3A0x6bf2110444b3d159!2s32-200%20Miech%C3%B3w!5e0!3m2!1spl!2spl!4v1682497385509!5m2!1spl!2spl"></iframe>
            </span>        
        </div>
    )
}