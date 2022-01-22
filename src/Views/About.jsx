import Button from '../Components/Button';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section id="about">
            <Fade>
                <div className="container-fluid">
                    <div className="row mb-4">
                        <div className="col-10">
                            <h1>SYNDROME MAIN COMPUTER</h1>

                            <h5 className="text-spaced">CREATED BY <span className="secondary-color">GIUSEPPE DEL CAMPO</span></h5>
                        </div>
                        <div className="col-2 secondary-color">
                            <span className="version">v.</span>
                            <span className="version-number">01</span>
                        </div>
                    </div>

                    <Button Title="Proceed to Authentication" To="/authentication" />
                </div>
            </Fade>
        </section>
    )
};

export default About;