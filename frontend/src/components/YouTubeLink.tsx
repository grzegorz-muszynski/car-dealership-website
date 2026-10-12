import { youtubeIconPath } from './SocialSidebar';

// Pulls the 11-character video ID out of any common YouTube link:
// youtube.com/watch?v=ID, youtu.be/ID, youtube.com/shorts/ID, /embed/ID, /live/ID (extra parameters are fine)
export function getYouTubeId(url?: string | null): string | null {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    return match ? match[1] : null;
}

// "Watch the video" button with the YouTube icon - opens the car's video on YouTube in a new tab
export default function YouTubeLink({ videoId }: { videoId: string }) {
    return (
        <a
            className='inline-flex items-center gap-2 px-4 py-1.5 font-bebasFont text-xl tracking-wide btn-gold'
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target='_blank'
            rel='noopener noreferrer'
        >
            <svg className='w-6 h-6' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                <path d={youtubeIconPath} />
            </svg>
            OBEJRZYJ FILM
        </a>
    );
}
