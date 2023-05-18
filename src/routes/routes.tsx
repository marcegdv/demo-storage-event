import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import HelpPage from "../pages/help";
import InfoPage from "../pages/info";
import { RouteType } from "../types/routes.types";

export const ROUTES: RouteType[] = [
    {
        path: '/',
        name: 'Home',
        element: <HomePage />,
        inNavbar: true,
    },
    {
        path: '/about',
        name: 'About',
        element: <AboutPage />,
        inNavbar: true,
    },
    {
        path: '/help',
        name: 'Help',
        element: <HelpPage />,
        inNavbar: true,
    },
    {
        path: '/info',
        name: 'Info',
        element: <InfoPage />,
        inNavbar: false,
    },
];

const AppRouter = (): JSX.Element => {

    return (
        <BrowserRouter>
            <Routes>
                {ROUTES.map(
                    (page: RouteType) => {
                        return <Route
                            key={`pathTo${page.path}`}
                            path={page.path}
                            element={page.element}
                        />
                    }
                )}
            </Routes>
        </BrowserRouter>
    );

};

export default AppRouter;