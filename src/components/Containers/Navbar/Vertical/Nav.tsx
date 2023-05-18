import MenuButton from './MenuButton';
import MenuOptions from './MenuOptions';
import OptionSeparator from './OptionSeparator';

import '../Navbar.css';
import { UseVerticalNavProps, useVerticalNav } from './useVerticalNav';

export type NavProps = {
    linkList: JSX.Element[],
    pattern?: string,
};

const Nav = ({ linkList, pattern }: NavProps): JSX.Element => {

    const hookProps: UseVerticalNavProps = {
        elements: linkList,
        pattern: pattern || '',
        separator: <OptionSeparator />
    };

    const { showList, setShowList, options } = useVerticalNav(hookProps);

    return (
        <div className='navbar-container-vertical'>
            <MenuOptions showList={showList} options={options} />
            <MenuButton state={showList} setState={setShowList} />
            <span>StorageEvent</span>
        </div>
    );

};

export default Nav;