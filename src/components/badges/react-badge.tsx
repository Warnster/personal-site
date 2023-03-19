export const ReactBadge = ({title}: {title: string}) => {
    return (
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-react-bg text-react-text h-8 m-1">
            <div className="h-6 w-6 mr-2">
        <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" >

            <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
            <g stroke="currentColor" stroke-width="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
        </svg>
        </div>
        <span className="font-bold text-white">{title}</span>
        </div>
    );
    };