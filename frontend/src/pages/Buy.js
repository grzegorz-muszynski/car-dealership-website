import React from 'react';
import './Pages.css';

export default function Buy() {
    return (
        <div id="Buy">
            <div id="Buy__area">
                <h3>Formularz odkupu</h3>
                <p>Jeżeli są Państwo zainteresowani sprzedażą swojego samochodu, prosimy o kontakt telefoniczny lub wypełnienie i przesłanie poniższego formularza z uwzględnieniem podstawowych danych pojazdu, własnym opisem oraz poglądowymi zdjęciami.</p>

                <form action="https://formsubmit.co/alfamotors.kontakt@gmail.com" method="POST" enctype="multipart/form-data"> 
                {/* enctype has been set for sending images */}
                    <span className='column-inputs'>
                        <input type="text" name="Imię" placeholder='Imię' required/>
                        <input type="text" name="Nazwisko" placeholder='Nazwisko' required/>
                        <input type="text" name="Numer telefonu" placeholder='Numer telefonu' />
                        <input type="email" name="Adres e-mail" placeholder='Adres e-mail' required/>
                        <input type="text" name="Cena" placeholder='Proponowana cena'/>
                    </span>

                    <span className='column-inputs'>
                        <input type="text" name="Marka i model" placeholder='Marka i model' required/>
                        <input type="text" name="Rok produkcji" placeholder='Rok produkcji' required/>
                        <input type="text" name="Wersja silnikowa" placeholder='Wersja silnikowa' required/>
                        <input type="text" name="Przebieg" placeholder='Przebieg' required/>
                        <input type="text" name="Kraj" placeholder='Kraj pochodzenia' required/>
                    </span>

                    <span id='third-span'>
                        <textarea type="text" name="Wiadomość" placeholder='Własny opis pojazdu/komentarz/uwag' required rows='4' />
                        <span id='third-span__attachments'>
                            <input type="file" name="Załącznik 1" accept="image/png, image/jpeg"/>
                            <input type="file" name="Załącznik 2" accept="image/png, image/jpeg"/>
                            <input type="file" name="Załącznik 3" accept="image/png, image/jpeg"/>
                        </span>    
                        {/* <button type="submit">WYŚLIJ</button> */}
                        {/* Button replaced with <input> for Safari browser */}
                        <input id='Buy__area__button' type='submit' value='WYŚLIJ' />
                        {/* <p id='Buy-area__button' type='submit'>WYŚLIJ</p> */}
                    </span>

                    <input type="hidden" name="_subject" value="Oferta od klienta"></input>
                    <input type="hidden" name="_next" value="https://alfamotors.pl/thanks"></input>
                </form>
            </div>
        </div>
    )
}