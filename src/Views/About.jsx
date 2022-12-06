import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import { FiPlayCircle } from "react-icons/fi";
import { AiFillGithub } from 'react-icons/ai'
import Video from 'react-responsive-video';
import PreCacheImg from 'react-precache-img';

function importAll(r) {
    let images = {};
    // eslint-disable-next-line array-callback-return
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const About = () => { 
    const supers = importAll(require.context('../Images/Supers/', false, /\.(png|jpe?g|svg)$/));
    const omnidroids = importAll(require.context('../Images/Omnidroids/', false, /\.(png|jpe?g|svg)$/));
    const kronosPics = importAll(require.context('../Images/Kronos/', false, /\.(png|jpe?g|svg)$/));
    const superResults = importAll(require.context('../Images/Search Results/', false, /\.(png|jpe?g|svg)$/));

    return (
        <section id="about">
            <PreCacheImg images={Object.values(supers)}/>
            <PreCacheImg images={Object.values(omnidroids)}/>
            <PreCacheImg images={Object.values(kronosPics)}/>
            <PreCacheImg images={Object.values(superResults)} />
            
            <Fade>
                <div className="header">
                    <div className="d-flex flex-row gap-2 align-items-center">
                        <img id="super-image" src={'./The-Incredibles-Logo.png'} alt="logo" />
                        <h5>Made with react by <a href="https://github.com/Giuseppetm" className="author">GIUSEPPE DEL CAMPO</a></h5>
                    </div>

                    <a href="https://github.com/Giuseppetm/syndrome-main-computer">
                        <div className="button">
                            <h5>Repository</h5>
                            <AiFillGithub />
                        </div>
                    </a>
                </div>

                <div className="content">
                    <div className="container">
                            <div className="d-flex flex-column gap-2 align-items-center">
                                <div className="title">
                                    <h1>SYNDROME MAIN COMPUTER</h1>
                                </div>

                                <div className="description mb-4">
                                    <h3>from "The Incredibles" movie (2004), Kronos Unveiled sequence</h3>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center mb-4">
                                <div className="video">
                                    <Video mp4={require('../Videos/kronos_edit.mp4')} />
                                </div>
                            </div>

                            <div className="mobile-warning">
                                <span>
                                    Warning: you are using a device with a display that is too small. Use a desktop for the correct experience.
                                </span>
                            </div>
                                    
                            <div className="d-flex justify-content-center">
                                <Link to="/authentication">
                                    <span className="button">PROCEED WITH THE REPRODUCTION <FiPlayCircle /></span>
                                </Link>
                            </div>

                    </div>
                </div>
            </Fade>
        </section>
    )
};

export default About;