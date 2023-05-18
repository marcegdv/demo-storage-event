import { useMemo, useState } from "react";
import '../Navbar.css';

export type UseVerticalNavProps = {
    elements: JSX.Element[],
    pattern?: string,
    separator: JSX.Element,
};

export const useVerticalNav = ({ elements, pattern, separator }: UseVerticalNavProps) => {

    const [showList, setShowList] = useState<boolean>(false);

    const options = useMemo(
        () => {
            if (!pattern || !pattern.includes('-')) return elements;

            const output: JSX.Element[] = [...elements]

            Array.from(pattern).forEach(
                (char: string, index: number) => {
                    if (char === '-') output.splice(index, 0, separator);
                }
            );
            return output;
        }, [elements, pattern, separator]
    );

    return { showList, setShowList, options };

};