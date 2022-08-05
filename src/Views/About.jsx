import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import { FiPlayCircle } from "react-icons/fi";
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
                <div className="container-fluid">
                    <div className="description mb-4">
                        <h1>SYNDROME MAIN COMPUTER</h1>

                        <h3>from "The Incredibles" movie (2004)</h3>

                        <div>
                            <h5>Reproduction made by</h5> 
                            <h5><span className="secondary-color"><a href="https://github.com/Giuseppetm">GIUSEPPE DEL CAMPO</a></span></h5>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: "center", marginBottom: 40 }}>
                        <Video mp4={require('../Videos/kronos_edit.mp4')} />
                    </div>

                    <div className="mobile-warning">
                        <span>
                            Warning: you are using a device with a display that is too small. Use a desktop for the correct experience.
                        </span>
                    </div>
                            
                    <Link to="/authentication" style={{ display: 'flex', justifyContent: 'center' }}>
                        <span className="button">PROCEED WITH THE REPRODUCTION <FiPlayCircle /></span>
                    </Link>
                </div>
            </Fade>

        </section>
    )
};

export default About;