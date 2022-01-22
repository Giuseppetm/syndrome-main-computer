import Fade from 'react-reveal/Fade';
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
                    <div className="navigator-item" active>
                        <span className="navigator-item-content"><img src={Isle} alt="Isle" className="icon" />Island operations</span>
                    </div>
                </Fade>

                <Fade>
                    <div className="navigator-item">
                        <span className="navigator-item-content"><img src={Dollar} alt="Finances" className="icon" />Finances</span>
                    </div>
                </Fade>

                <Fade>
                    <div className="navigator-item">
                        <span className="navigator-item-content"><img src={Omnidroid} alt="Omnidroid" className="icon" />Omnidroid metatraining</span>
                    </div>
                </Fade>

                <Fade>
                    <div className="navigator-item">
                        <span className="navigator-item-content"><img src={Supers} alt="Supers" className="icon" />Supers</span>
                    </div>
                </Fade>
            </div>
        </section>
    )
};

export default Navigator;