import Navbar from "../../components/Containers/Navbar/Navbar";
import App from "../../App/App";

import './help.css';

const HelpPage = (): JSX.Element => {

    return (
        <div className='help-page-container'>
            <Navbar />
            <h1>Help page.</h1>
            <App />
        </div>
    );

};

export default HelpPage;