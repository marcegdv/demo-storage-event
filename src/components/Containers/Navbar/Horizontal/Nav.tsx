
import '../Navbar.css';

export type NavProps = {
    linkList: JSX.Element[]
};

const Nav = ({ linkList }: NavProps): JSX.Element => {

    return (
        <div className='navbar-container-horizontal'>
            {linkList}
        </div>
    );

};

export default Nav;