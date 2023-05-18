import App from "../../App/App";
import Navbar from "../../components/Containers/Navbar/Navbar";

import './home.css';

const HomePage = (): JSX.Element => {

    return (
        <div className='home-page-container'>
            <Navbar />
            <h1>Home page.</h1>
            <App />
        </div>
    );

};

export default HomePage;