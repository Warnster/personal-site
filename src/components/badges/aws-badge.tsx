import Image from "next/image";

export const AWSBadge = () => {
    return (
    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200  h-8 m-1">
      <div className="h-6 w-6">
        <Image width="24" height="24" src="/aws-icon.svg" alt="AWS Logo" />
      </div>
    </div>
    )
};