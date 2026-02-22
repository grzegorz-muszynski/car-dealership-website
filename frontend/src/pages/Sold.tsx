import Car from '../components/Car';
import Loader from '../components/Loader';
import PagesToggler from '../components/PagesToggler';

const strapiURL: string = 'https://kokpit.alfamotors.pl';

    // Local:
// const strapiURL = 'http://localhost:1337';
// const apiURL = 'http://localhost:1337/api/cars?populate=*'; 
interface CarAttributes {
    state: string;
    title: string;
    mileage: number;
    year: number;
    fuel: string;
    power: number;
    gallery: GalleryItem;
}

interface GalleryItem {
    data: {
        attributes: {
            formats: {
                large: {
                    url: string;
                };
                medium: {
                    url: string;
                };
                small: {
                    url: string;
                };
                thumbnail: {
                    url: string;
                };
            };
        };
        id: number;
    }[];
}
  
interface CarData {
    id: string;
    attributes: CarAttributes;
}


interface SoldProps {
    arrayToDisplay: CarData[][];
    isLoading: boolean;
    pagesQuantity: number;
}

export default function Sold(props: SoldProps) {
    const { arrayToDisplay, isLoading, pagesQuantity } = props;

    return (
        <div id="Sold">
            <h1 className='page-title pb-8'>POJAZDY, KTÓRE ZNALAZŁY JUŻ NOWEGO WŁAŚCICIELA</h1>
            <div className='cards-area cards-area--sold'>
                {isLoading ? (<Loader/>) : (
                    arrayToDisplay.map((car: CarData[], index: number) => (
                        <Car 
                            key={'Car no ' + index}
                            id={car[1].id}
                            state={car[1].attributes.state}
                            title={car[1].attributes.title}
                            mileage={car[1].attributes.mileage} 
                            year={car[1].attributes.year} 
                            fuel={car[1].attributes.fuel} 
                            power={car[1].attributes.power} 
                            imageSource={(() => {
                                const g0 = car?.[1]?.attributes?.gallery?.data?.[0]?.attributes;
                                const relUrl =
                                    g0?.formats?.small?.url ||
                                    g0?.formats?.medium?.url ||
                                    g0?.formats?.large?.url ||
                                    g0?.formats?.thumbnail?.url ||
                                    g0?.url ||
                                    '';
                                return relUrl ? strapiURL + relUrl : '';
                            })()}
                        />
                    ))
                )}
            </div>

            <PagesToggler pagesQuantity={pagesQuantity} />  
        </div>
    )
}
