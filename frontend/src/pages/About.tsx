export default function About() {
    return (
        <div id="About" className="mx-auto w-[90vw] pb-[80px]
        lg:w-[1000px] lg:pb-[50px]">
            <h1 className="page-title pt-5">O nas</h1>
            <div className="mb-5">
                <h2 className="about__subtitle">Historia</h2>
                <p>
                    <span className="font-bold text-gold">ALFA MOTORS</span> to rodzinna firma specjalizująca się w sprzedaży luksusowych samochodów marek premium, której tradycja sięga już prawie trzydziestu lat.
                </p>
                <p>
                    Powstała z pasji do motoryzacji, gdzie doświadczenie i wiedza o samochodach została przekazana z pokolenia na pokolenie.
                </p>
            </div>

            <div className="mb-[20px]">
                <h2 className="about__subtitle">Cel</h2>
                <p>
                    Naszym głównym założeniem jest indywidualne, szczere i uczciwe podejście do każdego klienta, aby świadomie wybrał najlepszy dla siebie samochód.
                </p>
                <p>
                    Większość naszych Klientów po udanej pierwszej transakcji, wraca do nas po kolejny pewny zakup oraz rekomenduje nasze usługi dalej.
                </p>
            </div>

            <div className="mb-[20px]">
                <h2 className="about__subtitle">Podstawa działalności</h2>
                <p>
                    Wszystkie samochody są naszą własnością. Decyzja o zakupie poprzedzona jest zawsze gruntownym sprawdzeniem pojazdu oraz spełnieniem ostrych kryteriów selekcyjnych.
                </p>
                <p className="font-bold">
                    Kupujemy jedynie takie egzemplarze, które mają w pełni udokumentowaną historię użytkowania i serwisowania, są bezwypadkowe oraz często posiadają fabryczną gwarancję.
                </p>
                <p className="font-bold">
                    Samochody wyłącznie krajowe, zakupione w polskich salonach autoryzowanych dealerów.
                </p>
            </div>

            <div className="mb-[20px]">
                <h2 className="about__subtitle">Zmiana samochodu - kompleksowe podejście</h2>
                <p>
                    Podchodzimy kompleksowo do zagadnienia jakim jest zmiana samochodu przez potencjalnego Klienta:
                </p>
                <ul className="list-disc pl-[25px] m-[3px]">
                    <li>zapewniamy doradztwo w wyborze marki i modelu, który będzie spełniał Państwa oczekiwania</li>
                    <li>wyszukujemy pojazdy na Państwa zlecenie według konkretnych wymagań</li>
                    <li>jeżeli posiadacie Państwo pojazd w bardzo dobrym stanie, możemy go odkupić lub wziąć w rozliczeniu za samochód z naszej oferty</li>
                    <li>organizujemy bardzo korzystne finansowanie dla firm, jak również dla osób prywatnych.</li>
                </ul>
            </div>
            
            <h3 className="font-bebasFont text-center text-3xl font-medium text-gold pt-2 pb-7 mx-auto my-0">Zapraszamy do kontaktu przez formularz, mailowo lub telefonicznie!</h3>
        </div>
    );
}