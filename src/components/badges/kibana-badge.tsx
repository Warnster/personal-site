import Image from "next/image";

export const KibanaBadge = () => {
    return (
    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 h-8 m-1">
      <div className="h-6 w-14">
        <Image width="50" height="24" src="/kibana-icon.svg" alt="Kibana Logo" />
      </div>
    </div>
    )
};