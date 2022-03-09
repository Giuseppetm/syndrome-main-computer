import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import { FiPlayCircle } from "react-icons/fi";
import Video from 'react-responsive-video'

const About = () => {
    return (
        <section id="about">
            <Fade>
                <div className="container-fluid">
                    <div className="mb-4">
                        <h1>SYNDROME MAIN COMPUTER</h1>

                        <h3>from "The Incredibles" movie (2004)</h3>

                        <h5>Reproduction made by <span className="secondary-color"><a href="https://github.com/Giuseppetm">GIUSEPPE DEL CAMPO</a></span></h5>
                    </div>

                    <div style={{ display: 'flex', justifyContent: "center", marginBottom: 40 }}>
                        <Video mp4={require('../Videos/kronos_edit.mp4')} />
                    </div>
                            
                    <Link to="/authentication">
                        <span className="button">PROCEED WITH THE REPRODUCTION <FiPlayCircle style={{ marginBottom: 8 }} /></span>
                    </Link>
                </div>
            </Fade>
        </section>
    )
};

export default About;