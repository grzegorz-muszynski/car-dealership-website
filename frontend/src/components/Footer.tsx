import { SocialRow } from './SocialSidebar';

export default function Footer() {
    return (
        // mt-auto pushes the footer to the bottom of the page (App is a flex column)
        <div id='Footer' className='mt-auto bg-black border-t border-gold-dark/50 text-silver-dark font-bebasFont'>
            <SocialRow />
            <div className='flex flex-col leading-8
            xs:flex-row xs:justify-between'>
                <span className="px-2">Copyright © 2023 Alfa Motors</span>
                <span className="px-2">Realizacja ARDEO Grzegorz Muszyński</span>
            </div>
        </div>
    )
}
