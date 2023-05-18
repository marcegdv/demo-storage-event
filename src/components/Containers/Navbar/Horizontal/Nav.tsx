
import '../Navbar.css';

export type NavProps = {
    linkList: JSX.Element[]
};

const Nav = ({ linkList }: NavProps): JSX.Element => {

    const withKey: JSX.Element[] = linkList.map(
        (element: JSX.Element, index: number) => {
            return (
                <div key={`horizontal-nav-option-key-${index}`}>
                    {element}
                </div>
            );
        }
    );

    return (
        <div className='navbar-container-horizontal'>
            {withKey}
        </div>
    );

};

export default Nav;