import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Dollar from '../Images/dollar.svg';
import Isle from '../Images/isle.svg';
import Omnidroid from '../Images/omnidroid.svg';
import Supers from '../Images/supers.svg';

const Navigator = () => {
    return (
        <section id="navigator">

            <div className="box-icons-borders" />

            <div className="navigator-frame">
                <Fade>
                    <div className="navigator-item">
                        <Link to="/kronos">
                            <div className="navigator-item-content">
                                <img src={Isle} alt="Isle" className="icon" />
                                Island operations
                            </div>
                        </Link>
                    </div>
                </Fade>

                <Fade>
                    <div className="navigator-item disabled">
                        <div className="navigator-item-content">
                            <img src={Dollar} alt="Finances" className="icon" />
                            Finances
                        </div>
                    </div>
                </Fade>

                <Fade>
                    <div className="navigator-item disabled">
                        <div className="navigator-item-content">
                            <img src={Omnidroid} alt="Omnidroid" className="icon" />
                            Omnidroid metatraining
                        </div>
                    </div>
                </Fade>

                <Fade>
                    <div className="navigator-item">
                        <Link to="/supers">
                            <div className="navigator-item-content">
                                <img src={Supers} alt="Supers" className="icon" />
                                Supers
                            </div>
                        </Link>
                    </div>
                </Fade>
            </div>

        </section>
    )
};

export default Navigator;