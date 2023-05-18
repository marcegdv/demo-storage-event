import BootstrapIcon from "../../../assets/svg/Bootstrap/Bootstrap";
import { useMenuButton } from "./useMenuButton";

import '../Navbar.css';

export type MenuButtonProps = {
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>,
};

const MenuButton = ({ state, setState }: MenuButtonProps): JSX.Element => {

    const {
        handleOnKeyDown, handleOnKeyUp,
        handleOnMouseDown, handleOnMouseUp,
        handleOnMouseEnter, handleOnMouseLeave,
        handleButtonClass
    } = useMenuButton({ state, setState });

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