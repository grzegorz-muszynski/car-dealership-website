export default function Buy() {
    return (
        <div id="Buy" className="pt-8 pb-32 font-bebasFont">
            <div className="max-w-72 w-10/12 px-2 pb-4 mx-auto bg-panel border border-gold-dark/40 shadow-buy-form
            sm:max-w-none sm:w-[530px]
            md:w-[680px]
            xl:w-[1100px] xl:pb-0">
                <h3 className="page-title pt-4 pb-2">Formularz odkupu</h3>
                <p className="p-2 pb-5 font-sans
                sm:text-justify">Jeżeli są Państwo zainteresowani sprzedażą swojego samochodu, prosimy o kontakt telefoniczny lub wypełnienie i przesłanie poniższego formularza z uwzględnieniem podstawowych danych pojazdu, własnym opisem oraz poglądowymi zdjęciami.</p>

                {/* enctype has been set for sending images */}
                <form className="sm:flex sm:flex-wrap" action="https://formsubmit.co/alfamotors.kontakt@gmail.com" method="POST" encType="multipart/form-data"> 
                    <div className='sm:w-6/12 sm:pr-1
                    xl:w-4/12 xl:pr-3  xl:h-48'>
                        <input className="buy__area__form__input" type="text" name="Imię" placeholder='Imię' required/>
                        <input className="buy__area__form__input" type="text" name="Nazwisko" placeholder='Nazwisko' required/>
                        <input className="buy__area__form__input" type="text" name="Numer telefonu" placeholder='Numer telefonu' />
                        <input className="buy__area__form__input" type="email" name="Adres e-mail" placeholder='Adres e-mail' required/>
                        <input className="buy__area__form__input" type="text" name="Cena" placeholder='Proponowana cena'/>
                    </div>

                    <div className='sm:w-6/12 sm:pl-1
                    xl:w-4/12 xl:pl-0 xl:pr-3  xl:h-48'>
                        <input className="buy__area__form__input" type="text" name="Marka i model" placeholder='Marka i model' required/>
                        <input className="buy__area__form__input" type="text" name="Rok produkcji" placeholder='Rok produkcji' required/>
                        <input className="buy__area__form__input" type="text" name="Wersja silnikowa" placeholder='Wersja silnikowa' required/>
                        <input className="buy__area__form__input" type="text" name="Przebieg" placeholder='Przebieg' required/>
                        <input className="buy__area__form__input" type="text" name="Kraj" placeholder='Kraj pochodzenia' required/>
                    </div>

                    <div className="w-full
                    xl:w-4/12  xl:h-48">
                        <textarea className="buy__area__form__input
                        xl:h-[102px]" name="Wiadomość" placeholder='Własny opis pojazdu/komentarz/uwagi' required rows={4} />

                        {/* Attachments inputs */}
                        <div className="block mt-4 mx-auto
                        sm:flex sm:w-[520px]
                        xl:relative xl:bottom-px xl:w-full xl:grid xl:grid-cols-2 xl:mt-0">
                            <input className="buy__area__form__attachment
                            xl:my-px" type="file" name="Załącznik 1" accept="image/png, image/jpeg"/>
                            <input className="buy__area__form__attachment
                            xl:my-px" type="file" name="Załącznik 2" accept="image/png, image/jpeg"/>
                            <input className="buy__area__form__attachment
                            xl:my-px" type="file" name="Załącznik 3" accept="image/png, image/jpeg"/>
                        </div>  

                        {/* Button replaced with <input> for Safari browser */}
                        <input className="block w-20 mt-4 mx-auto text-lg tracking-wide btn-gold
                        xl:relative xl:left-[90px] xl:bottom-[49px]" type='submit' value='WYŚLIJ' />
                    </div>

                    <input className="buy__area__form__input" type="hidden" name="_subject" value="Oferta od klienta"></input>
                    <input className="buy__area__form__input" type="hidden" name="_next" value="https://alfamotors.pl/thanks"></input>
                </form>
            </div>
        </div>
    )
}