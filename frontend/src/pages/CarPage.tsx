import useFetch from '../hooks/useFetch';
import ImageSlider from '../components/ImageSlider';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const strapiURL = 'https://kokpit.alfamotors.pl/';

    // Local
// const strapiURL = 'http://localhost:1337';
// const apiURL = 'http://localhost:1337/api/cars?populate=*';

interface CarAttributes {
    title: string;
    state: string;
    price?: number;
    year: number;
    mileage: number;
    fuel: string;
    power: number;
    engine_size: string;
    doors: number;
    seats?: number;
    gearbox: string;
    drive: string;
    body: string;
    color: string;
    country: string;
    first_registration: string;
    vin: string;
    gallery: {
        data: {
            attributes: {
                url: string;
            };
        }[];
    };
    description: string;
}

interface Car {
    id: number;
    attributes: CarAttributes;
}

interface StrapiCar {
    0: string;
    1: Car;
}

interface ImageAttributes {
    alternativeText: null;
    caption: null;
    createdAt: string;
    ext: string;
    formats: any;
    hash: string;
    height: number;
    mime: string;
    name: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    size: number;
    updatedAt: string;
    url: string;
    width: number;
}

interface Image {
    attributes: ImageAttributes;
    id: number;
  }

export default function CarPage() {
    const { id } = useParams();
    const apiURL = id
        ? `https://kokpit.alfamotors.pl/api/cars/${id}?populate=*`
        : '';
    
    const { loading, error, data } = useFetch(apiURL);
    let imagesURLs: string[] = []; // here will be stored URLs of images
    let idCar: number = Number(id); // turninig string into number

    // A function checking if ID in URL is same as currently checked car from db
    function isThatCar(fetchedCar: Car[]) {
        return fetchedCar[1].id === idCar;
    }
    
    if (loading) return <Loader />
    if (error) return <p>Error!!!</p>

    // let foundCar: StrapiCar | undefined = data.find(isThatCar);
    let foundCar: any = data.find(isThatCar);

    // Collecting an array of car's images
    if (foundCar && foundCar[1]) {
        const gallery = foundCar?.[1]?.attributes?.gallery?.data ?? [];
        gallery.forEach((image: Image) => {
            const formats = image?.attributes?.formats;
            const relUrl =
                formats?.large?.url ||
                formats?.medium?.url ||
                formats?.small?.url ||
                formats?.thumbnail?.url ||
                image?.attributes?.url ||
                '';
            if (relUrl) imagesURLs.push(strapiURL + relUrl);
        });
    } else {
        // if url has ID which is not in db
        return <h3 style={{textAlign: 'center', fontSize: '22px', fontWeight: '700', marginTop: 50, paddingInline: '5px'}}>Brak samochodu o takim identyfikatorze.</h3>
    }

    return (
        <div className='CarPage relative pb-64'> {/* Relative position necessary to lock table with absolute position */}
            <h1 className='py-4 px-2 font-bebasFont text-2xl text-center
            sm:py-6 sm:text-3xl'>
                {foundCar[1].attributes.title + ' '}
                <div className='CarPage__price__area font-medium text-red-600 sm:inline-block' style={
                    foundCar[1].attributes.state==='sold' || 
                    foundCar[1].attributes.state==='soon' ? {display: 'none'} : {}
                }>
                    <span className='CarPage__price__area__dash px-1'>{foundCar[1].attributes.price ? ` - ` : ' '}</span> 
                    <span className='CarPage__price__area__number'>
                        {foundCar[1].attributes.state==='zarezerwowane' ? 
                        ' - ZAREZERWOWANE' : 
                        foundCar[1].attributes.price + ' PLN'}
                    </span>
                </div>
            </h1>

            {/* Mini slider */}
            <ImageSlider id='ImageSlider' slides={imagesURLs} />

            <table className='relative top-16 w-90vw max-w-lg mx-auto bg-gray-100 border border-black shadow-car-page-shadow text-[15px] font-medium
            lg:inline-block lg:top-0 lg:left-2 lg:max-w-none lg:w-[360px]
            xl:left-4
            '>
                <tbody className='block width-full'>
                    <tr className="CarPage__table__body__row border-0"> {/* The first row must be without border */}
                        <td className="CarPage__table__body__row__cell-first">Rok produkcji:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.year}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Przebieg:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.mileage} km</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Paliwo:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.fuel}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Moc silnika:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.power} KM</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Poj. silnika:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.engine_size}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Liczba drzwi:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.doors}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Liczba miejsc:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.seats}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Skrzynia biegów:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.gearbox}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Napęd:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.drive}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Nadwozie:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.body}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Kolor:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.color}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Kraj pochodzenia:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.country}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Data pierwszej rejestracji:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.first_registration}</td>
                    </tr>
                    <tr className="CarPage__table__body__row">
                        <td className="CarPage__table__body__row__cell-first">Forma sprzedaży:</td>
                        <td className="CarPage__table__body__row__cell-second">{foundCar[1].attributes.vin}</td>
                    </tr>
                </tbody>
            </table>

            <div className='CarPage__description relative top-32 w-90vw max-w-[1080px] mx-auto bg-gray-100 shadow-car-page-shadow'>
                <div className="pt-3 pb-7 font-medium text-3xl text-center underline underline-offset-[12px]">Opis pojazdu</div>
                <ReactMarkdown className='px-2'>
                    {foundCar[1].attributes.description}
                </ReactMarkdown>
            </div>
        </div>
    )
}
