import Image from "next/image";

export const AzureBadge = () => {
    return (
    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-black h-8 m-1">
      <div className="h-6 w-6 mr-2">
        <Image width="24" height="24" src="/microsoft_azure-icon.svg" alt="Azure Logo" />
      </div>
      <span className="font-bold text-azure">Azure</span>
    </div>
    )
};