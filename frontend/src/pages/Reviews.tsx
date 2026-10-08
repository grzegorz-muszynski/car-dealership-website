// Customer reviews copied from the Alfa Motors profile on OtoMoto.
// OtoMoto doesn't allow embedding or fetching them, so new reviews have to be added here by hand (newest first).

const otomotoUrl = 'https://alfamotors.otomoto.pl/inventory';

interface Review {
    author: string;
    date: string;
    car: string;
    text: string;
}

const reviews: Review[] = [
    {
        author: 'Marcin H.',
        date: '13 września 2026',
        car: 'Mercedes-Benz GLC 300 mHEV',
        text: 'Auto zgodne z opisem, sam sprzedający bardzo profesjonalny, wiedza super, pomoc w załatwianiu dokumentów do leasingu jak i rejestracji również, musi tylko trochę Mateusz popracować nad sztuką negocjacji ale jest młody i jeszcze się nauczy 👍😊 tak czy tak polecam gorąco 👍',
    },
    {
        author: 'HoffD',
        date: '13 września 2026',
        car: 'Mercedes-Benz GLC 300 mHEV',
        text: 'Firma profesjonalna, samochody w stanie idealnym odpis zgadza się ze stanem faktycznym samochód przygotowany do sprzedaży od a do z bez żadnych problemów, sprzedający pomocny, słowny i uczciwy. Polecam serdecznie firmę, napewno kiedyś wrócę do sprzedającego',
    },
    {
        author: 'Tomi',
        date: '11 września 2026',
        car: 'Lexus NX 450h+ F Sport AWD',
        text: 'Zakup samochodu przez internet to zawsze spory stres, ale dzięki panu Mateuszowi cała transakcja przebiegła rewelacyjnie. Obsługa była w pełni profesjonalna, a kontakt bezproblemowy. Samochód jest w świetnym stanie. Z pełnym przekonaniem polecam każdemu kto szuka uczciwego sprzedawcy!',
    },
    {
        author: 'Norb',
        date: '4 sierpnia 2026',
        car: 'Mercedes-Benz Klasa C',
        text: 'Wiedza, pasja i profesjonalizm w jednym miejscu. Auto w 100% zgodne z opisem. Bardzo dobry kontakt ze sprzedającym Panem Mateuszem. Samochód dostarczony pod same drzwi. Pozdrawiam z dolnośląskiego.',
    },
    {
        author: 'Just',
        date: '3 sierpnia 2026',
        car: 'Mercedes-Benz GLC 200 mHEV',
        text: 'Super kontakt, obsługa, fantastyczny wybór innych aut. Samochód mimo, że używany to jak nowy. Posiada u siebie same perełki. Bardzo polecam!',
    },
    {
        author: 'Ewelina',
        date: '6 czerwca 2026',
        car: 'BMW X6 xDrive30d M Sport',
        text: 'U Pana Mateusza juz od początku czuć profesjonalizm,auta dopieszczone,obsluga na najwyższym poziomie od A do Z kompleksowo cala transakcja załatwiona w jednym miejscu.Sprzedawca niezwykle zaangażowany, z ogromną wiedzą i pasją do motoryzacji.Jeśli kupować auto klasy premium to tylko u Pana.Polecam!',
    },
    {
        author: 'Fh5g',
        date: '5 czerwca 2026',
        car: 'Mercedes-Benz GLB 200',
        text: 'Jestem zachwycona obsługą w Alfa Motors!Zakup samochodu przebiegł szybko i sprawnie.Od pierwszego kontaktu do odbioru auta wszystko było zorganizowane profesjonalnie i bez najmniejszych problemów.Samochód spełnia wszystkie moje oczekiwania,a cały proces zakupu był czystą przyjemnością.',
    },
    {
        author: 'PawelS',
        date: '27 maja 2026',
        car: 'Mercedes-Benz Klasa C 200',
        text: 'Drugie auto wzięte od tego sprzedającego. Nienaganny stan i dokumentacja. Jedno i drugie auto idealne i super wyposażone.',
    },
    {
        author: 'SmileM',
        date: '29 kwietnia 2026',
        car: 'Mercedes-Benz CLA 200 AMG',
        text: 'Bardzo miły i rzeczowy sprzedający. Bez problemu udało się umówić na dowiezienie auta i to znacznie szybciej niż początkowo zakładano:) samochód w stanie jak w opisie, bez niespodzianek.',
    },
    {
        author: 'ProkopR',
        date: '19 kwietnia 2026',
        car: 'Alfa Romeo Stelvio 2.0 Turbo',
        text: 'Jestem bardzo zadowolony z mojego długo-wymarzonego samochodu jakim jest Alfa Romeo Stelvio w wersji Competizione. Samochód w prawie idealnym stanie, pachnie nowością. Rzetelne, konkretne i bez ściemniania podejście do tematu. Wiedziałem co kupuję (przez internet), nie zawiodłem się!',
    },
    {
        author: 'Snac',
        date: '28 marca 2026',
        car: 'BMW Seria 5 520d xDrive mHEV',
        text: 'Sprzedawca bardzo profesjonalny i uczciwy – wszystko zgodne z opisem, bez żadnych niespodzianek. Kontakt szybki i konkretny, a cały proces zakupu przebiegł sprawnie i bezproblemowo. Zdecydowanie polecam współpracę!',
    },
    {
        author: 'Adaaam1',
        date: '23 marca 2026',
        car: 'Mercedes-Benz CLA 200 AMG',
        text: 'Polecam Pana Mateusza Dostępny o każdej porze wiedzę jaką mi przekazał o pojeździe którym byłem zainteresowany była perfekcyjna dokumentacja pojazdu przygotowana perfekcyjnie Napewno się jeszcze spotkamy',
    },
    {
        author: 'Mateusz',
        date: '14 marca 2026',
        car: 'BMW X3 M Standard',
        text: 'Świetny kontakt ze sprzedającym. Jasne, rzetelne i profesjonalne przedstawienie pojazdu. Od pierwszej rozmowy, poprzez decyzję zakupową i organizacje leasingu - na każdym etapie transakcji Pan Mateusz prowadził przez proces zakupowy w sposób wzorowy. Każdemu życzę takiej obsługi i opieki po zakupie.',
    },
    {
        author: 'DreamyPenguin785',
        date: '13 marca 2026',
        car: 'Mercedes-Benz GLA 250 e PHEV',
        text: 'Super sprzedawca, jak najbardziej polecam. Uczciwy i rzetelny. 100% profesjonalny i uprzejmy. Duża wiedza techniczna. Auto zgodne z opisem. Sprzedawca otwarty na weryfikację w ASO. POLECAM!',
    },
    {
        author: 'Drab',
        date: '3 lutego 2026',
        car: 'Mercedes-Benz Klasa A 200',
        text: 'Fantastyczny sprzedawca! Pan Mateusz odpowiedział na wszystkie moje pytania, a co więcej – zwrócił uwagę na kilka aspektów, o których wcześniej nawet nie wiedziałem. Auto jest zadbane, piękne, a negocjacje dotyczące ceny i warunków sprzedaży przebiegły bardzo sprawnie.',
    },
    {
        author: 'Mime',
        date: '19 stycznia 2026',
        car: 'BMW Seria 5 530i GPF xDrive',
        text: 'Cały proces zakupu przebiegł sprawnie i w świetnej atmosferze. Pan Mateusz to fachowiec z pasją, szczery, pomocny i z ogromną wiedzą o oferowanych samochodach . Wraz z tatą tworzą zgrany, sympatyczny duet. Zdecydowanie polecam i na pewno jeszcze tu wrócę!',
    },
    {
        author: 'MagdalenaK',
        date: '17 stycznia 2026',
        car: 'BMW X4 M',
        text: 'Wyjątkowe miejsce na zakup auta. Pełna opieka nawet po zakupie pojazdu. Wszystko zgodne z opisem. Pozdrowienia dla Pana Mateusza!',
    },
    {
        author: 'Natalia',
        date: '13 stycznia 2026',
        car: 'BMW X3 M Standard',
        text: 'Świetny kontakt z Panem Mateuszem, szczegółowo odpowiedział na wszystkie pytania. Od pierwszego momentu czuć, że nie jest to zwykły komis tylko miejsce dla ludzi z pasją. Auto w 100% zgodne z opisem. Zbyt długo zwlekałam z decyzją i niestety ktoś mnie uprzedził, mój błąd :( Miejsce gorąco polecam!',
    },
    {
        author: 'Kamil',
        date: '2 grudnia 2025',
        car: 'Mercedes-Benz Klasa C',
        text: 'Świetny kontakt i pełen profesjonalizm. Samochód w idealnym stanie , dokładnie taki jak w ogłoszeniu Polecam !',
    },
    {
        author: 'IwonaK',
        date: '2 grudnia 2025',
        car: 'BMW Seria 5 530i GPF xDrive',
        text: 'Obsługa na najwyższym poziomie,naturalna, rzeczowa i pełna cierpliwości. Jestem bardzo zadowolona z zakupu w Alfa Motors. Jako kobieta naprawdę poczułam, że jestem traktowana profesjonalnie, bez pośpiechu i z taką uwagą, jaką zwykle spotyka się w najlepszych salonach beauty.',
    },
    {
        author: 'NaziemiecM',
        date: '2 grudnia 2025',
        car: 'Mercedes-Benz GLB',
        text: 'Wszystko zgodne z opisem. Fachowa pomoc specjalisty.',
    },
];

function Stars({ size }: { size: string }) {
    return (
        <span className='inline-flex text-gold' aria-label='Ocena 5 na 5'>
            {[0, 1, 2, 3, 4].map(i => (
                <svg key={i} className={size} viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                    <path d='M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                </svg>
            ))}
        </span>
    );
}

export default function Reviews() {
    return (
        <div id='Reviews' className='w-[90vw] mx-auto pb-16
        xl:w-[1200px]'>
            <h1 className='page-title'>OPINIE KLIENTÓW</h1>

            {/* Rating summary */}
            <div className='flex flex-col items-center py-8'>
                <div className='flex items-center gap-3'>
                    <span className='font-bebasFont text-6xl text-silver-light'>5.0</span>
                    <Stars size='w-8 h-8' />
                </div>
                <p className='mt-2 text-silver-dark text-center'>
                    Średnia z opinii naszych klientów w serwisie OtoMoto
                </p>
            </div>

            {/* Review cards - a grid, so they read newest first left to right */}
            <div className='grid grid-cols-1 gap-4
            md:grid-cols-2
            xl:grid-cols-3'>
                {reviews.map((review, index) => (
                    <div key={index} className='flex flex-col p-5 bg-panel border border-gold-dark/60 rounded-md'>
                        <div className='flex items-center justify-between gap-2'>
                            <Stars size='w-4 h-4' />
                            <span className='text-sm text-silver-dark'>{review.date}</span>
                        </div>
                        <p className='mt-3 mb-4 leading-relaxed'>{review.text}</p>
                        <div className='mt-auto pt-3 border-t border-gold-dark/30'>
                            <p className='font-semibold text-silver-light'>{review.author}</p>
                            <p className='text-sm text-silver-dark'>{review.car}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex flex-col items-center pt-8'>
                <p className='mb-4 text-silver-dark text-center'>Wszystkie opinie są dostępne na naszym profilu w serwisie OtoMoto.</p>
                <a
                    className='px-6 py-2 text-lg tracking-wide font-bebasFont btn-gold'
                    href={otomotoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    ZOBACZ NA OTOMOTO
                </a>
            </div>
        </div>
    );
}
