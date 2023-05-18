import { Link, useLocation } from 'react-router-dom';

import HorizontalNav from './Horizontal/Nav';
import VerticalNav from './Vertical/Nav';

import { ROUTES } from '../../../routes/routes';
import { RouteType } from '../../../types/routes.types';

import './Navbar.css';


const Navbar = (): JSX.Element => {

    const { pathname: currentPath } = useLocation();

    const getLinkCssClass = (pagePath: string) =>
        currentPath === pagePath
            ? 'navbar-link-highlighted'
            : 'navbar-link';

    const getLinks = (): JSX.Element[] => {
        const output: JSX.Element[] = [];
        ROUTES.forEach(
            (page: RouteType) => {
                if (page.inNavbar) {
                    output.push(
                        <Link className={getLinkCssClass(page.path)} to={page.path}>
                            {page.name}
                        </Link>
                    );
                };
            }
        );
        return output;
    };

    return (
        <>
            <HorizontalNav linkList={getLinks()} />
            <VerticalNav linkList={getLinks()} pattern='..-' />
        </>
    );
};

export default Navbar;