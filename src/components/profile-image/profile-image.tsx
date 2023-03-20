// create a component which returns an Image with a circular border
import Image from "next/image";

export const ProfileImage = () => {
  return (
    <div className="flex justify-center">
      <Image
        width="200"
        height="200"
        className="rounded-full border-2 border-gray-200"
        src="/sheep.jpg"
        alt="Profile Image"
      />
    </div>
  );
};
