import App from "../../App/App";
import Navbar from "../../components/Containers/Navbar/Navbar";


const HomePage = (): JSX.Element => {

    return (
        <div>
            <Navbar />
            <h1>Home page.</h1>
            <App />
        </div>
    );

};

export default HomePage;