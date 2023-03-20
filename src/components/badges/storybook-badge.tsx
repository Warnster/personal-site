import Image from "next/image";

export const StorybookBadge = () => {
    return (
    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-900 h-8 m-1">
      <div className="h-6 w-6 mr-2">
        <Image width="24" height="24" src="/storybook-icon.svg" alt="Storybook Logo" />
      </div>
      <span className="font-bold text-storybook">Storybook</span>
    </div>
    )
};