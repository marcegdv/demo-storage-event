import { useState } from "react";

export type useMenuButtonProps = {
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>,
};

export const useMenuButton = ({ state, setState }: useMenuButtonProps) => {

    const [pressing, setMouseDown] = useState<boolean>(false);
    const [mouseOver, setMouseOver] = useState<boolean>(false);

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
        if (event.key === ' ' || event.key === 'Enter') {
            if (!pressing) setMouseDown(true);
        };
    };

    const handleOnKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
        if (event.key === ' ' || event.key === 'Enter') {
            if (pressing) {
                setMouseDown(false);
                setState(!state);
            };
        };
    };

    const handleOnMouseDown = (): void => {
        if (mouseOver) setMouseDown(true);
    };

    const handleOnMouseUp = (): void => {
        if (pressing) {
            setMouseDown(false);
            setState(!state);
        };
    };

    const handleOnMouseEnter = (): void => {
        setMouseOver(true);
    };

    const handleOnMouseLeave = (): void => {
        setMouseOver(false);
        if (pressing) setMouseDown(false);
    };

    const handleButtonClass = (): string => {
        const colorState: string =
            state
                ? 'navbar-vertical-menu-button-open'
                : 'navbar-vertical-menu-button-close';

        const beingPressed: string =
            pressing
                ? 'navbar-vertical-menu-button-is-being-pressed'
                : ''
        return colorState + ' ' + beingPressed;
    };

    return {
        handleOnKeyDown, handleOnKeyUp,
        handleOnMouseDown, handleOnMouseUp,
        handleOnMouseEnter, handleOnMouseLeave,
        handleButtonClass
    };

};