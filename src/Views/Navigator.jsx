import Fade from 'react-reveal/Fade';
import Dollar from '../Images/dollar.svg';

const Navigator = () => {
    return (
        <section id="navigator">
            <div className="box-icons-borders" />
            <div className="navigator-frame">
                <Fade>
                    <div className="navigator-item" active>
                        <span className="navigator-item-content"><img src={Dollar} alt="Dollar" className="icon" />Island operations</span>
                    </div>
                </Fade>

                <Fade>
                    <div className="navigator-item">
                        <span className="navigator-item-content"><img src={Dollar} alt="Dollar" className="icon" />Finances</span>
                    </div>
                </Fade>

                <Fade>
                    <div className="navigator-item">
                        <span className="navigator-item-content"><img src={Dollar} alt="Dollar" className="icon" />Omnidroid metatraining</span>
                    </div>
                </Fade>

                <Fade>
                    <div className="navigator-item">
                        <span className="navigator-item-content"><img src={Dollar} alt="Dollar" className="icon" />Supers</span>
                    </div>
                </Fade>
            </div>
        </section>
    )
};

export default Navigator;