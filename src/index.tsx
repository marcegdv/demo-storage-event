import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './styles/vars.css';
import './index.css';

const USE_STRICT_MODE: boolean = true;

const RenderApp = (): JSX.Element =>
    USE_STRICT_MODE
        ? <React.StrictMode>
            <App />
        </React.StrictMode>
        : <App />

const root: ReactDOM.Root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<RenderApp />);