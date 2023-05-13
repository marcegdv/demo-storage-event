import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRouter from './routes/routes';
import { StrictModeProps } from './index.types';

import './styles/vars.css';
import './index.css';

// const PRODUCTION_MODE: boolean = ENV.PRODUCTION_MODE === 'true';
const PRODUCTION_MODE: boolean = false; //hardcode

const StrictMode = ({ children, strictMode }: StrictModeProps): JSX.Element => {
    if (strictMode) return <React.StrictMode>{children}</React.StrictMode>;
    return children;
};

const Main = (): JSX.Element => {
    return (
        <AppRouter />
    );
};

const root: ReactDOM.Root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode strictMode={!PRODUCTION_MODE}>
        <Main />
    </StrictMode>
);