import Image from "next/image";

export const FigmaBadge = () => {
    return (
    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-black h-8 m-1">
      <div className="h-6 w-6 mr-2">
        <Image width="16" height="24" src="/figma-logo.png" alt="Figma Logo" />
      </div>
      <span className="font-bold text-white">Figma</span>
    </div>
    )
};