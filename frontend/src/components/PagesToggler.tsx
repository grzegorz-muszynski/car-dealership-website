import { useLocation, NavLink } from 'react-router-dom';

interface PagesTogglerProps {
    pagesQuantity: number;
}

export default function PagesToggler (props: PagesTogglerProps) {
    const pagesQuantity: number = props.pagesQuantity;
    const location = useLocation();

    const pages = Array.from({ length: pagesQuantity }, (_, index) => (
        <NavLink key={index} to={`/sold/${index + 1}`}>
            <li className={
                `${location.pathname === `/sold/${index + 1}` ? 
                    'underline text-gold' 
                    : ''}
                mx-2`
            }>
                <span>{index + 1}</span>
            </li>
        </NavLink>
    ));
    
    return (
        <div id='PagesToggler' className=''>
            <ul className='flex w-full pb-16 list-none justify-center font-bebasFont text-2xl'>
                {pages}
            </ul>
        </div>
    );
}