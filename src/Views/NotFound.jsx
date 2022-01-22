import Button from '../Components/Button';
import Fade from 'react-reveal/Fade';

const NotFound = () => {
    return (
        <section id="notfound">
            <Fade>
                <div className="container-fluid">
                    <div className="row mb-4">
                        <div className="col-10">
                            <h1>SYNDROME MAIN COMPUTER</h1>
                            <h5 className="warning-color">ERROR: Page not found</h5>
                        </div>
                    </div>

                    <Button Title="Go back to About page" To="/" />
                </div>
            </Fade>
        </section>
    )
};

export default NotFound;