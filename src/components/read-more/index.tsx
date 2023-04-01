import { useState } from "react";

interface ReadMoreProps {
    children: string;
    maxCharCount?: number;
}

export const ReadMore = ({ children, maxCharCount = 400 }: ReadMoreProps) => {
    const text = children;
    const [isTruncated, setIsTruncated] = useState(true);
    const resultString = isTruncated ? text.slice(0, maxCharCount) : text;
    const toggleIsTruncated = () => {
        setIsTruncated(!isTruncated);
    };
    return (
        <>
        {resultString}
        {text.length > maxCharCount && (
            <span
            onClick={toggleIsTruncated}
            className="text-blue-500 cursor-pointer"
            >
            {isTruncated ? "...Read More" : " Show Less"}
            </span>
        )}
        </>
    );
    };

