import { useState } from 'react';

import MenuButton from './MenuButton';

import '../Navbar.css';
import MenuOptions from './MenuOptions';

export type NavProps = {
    linkList: JSX.Element[]
};

const Nav = ({ linkList }: NavProps): JSX.Element => {

    const [showList, setShowList] = useState<boolean>(false);

    return (
        <div className='navbar-container-vertical'>
            <MenuOptions showList={showList}>{linkList}</MenuOptions>
            <MenuButton state={showList} setState={setShowList} />
            <span>StorageEvent</span>
        </div>
    );

};

export default Nav;