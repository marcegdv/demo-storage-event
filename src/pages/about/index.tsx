import Navbar from "../../components/Containers/Navbar/Navbar";
import App from "../../App/App";

import './about.css';

const AboutPage = (): JSX.Element => {

    return (
        <div className='about-page-container'>
            <Navbar />
            <h1>About page.</h1>
            <App />
        </div>
    );
};

export default AboutPage;