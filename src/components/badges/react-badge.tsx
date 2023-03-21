import Image from 'next/image'

export const ReactBadge = ({title}: {title: string}) => {
    return (
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-react-bg text-react-text h-8 m-1">
            <div className="h-6 w-6 mr-2">
            <Image width="24" height="24" src="/react-icon.svg" alt="React Logo" />
        </div>
        <span className="font-bold">{title}</span>
        </div>
    );
    };