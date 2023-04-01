import { useMemo } from "react";

interface DescriptionProps {
    descriptionPath: string;
}

export const Description = ({descriptionPath}: DescriptionProps) => {

    const description = useMemo(() => {
        return import('../../../copy/' + descriptionPath)
            .then((module) => module.default)
            .catch((error) => {
                console.error(error);
                return 'Error loading description';
            });
    }, [descriptionPath])

    return (
        <div className="description">
            </div>
    )
}