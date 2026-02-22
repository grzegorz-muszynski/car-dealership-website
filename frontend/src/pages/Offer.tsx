import Car from '../components/Car';
import Loader from '../components/Loader';

const strapiURL: string = 'https://kokpit.alfamotors.pl';

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

interface OfferProps {
  arrayToDisplay: CarData[][];
  isLoading: boolean;
}

export default function Offer(props: OfferProps) {
  const { arrayToDisplay, isLoading } = props;

  return (
    <div id="Offer">
      <h1 className='page-title pb-8'>SPRAWDŹ NASZĄ OFERTĘ</h1>
      <div className='cards-area'>
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
    </div>
  )
}
