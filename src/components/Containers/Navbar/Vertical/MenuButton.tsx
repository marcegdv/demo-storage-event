import { useState } from "react";

import BootstrapIcon from "../../../assets/svg/Bootstrap/Bootstrap";

import '../Navbar.css';

export type MenuButtonProps = {
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>,
};

const MenuButton = ({ state, setState }: MenuButtonProps): JSX.Element => {

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

    return (
        <button
            className={handleButtonClass()}
            onKeyDown={handleOnKeyDown}
            onKeyUp={handleOnKeyUp}
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            {state
                ? <BootstrapIcon size='32' name='closeCircle' />
                : <BootstrapIcon size='32' name='list' />
            }
        </button>
    );

};

export default MenuButton;