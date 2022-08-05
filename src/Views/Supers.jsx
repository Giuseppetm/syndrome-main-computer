import { Link } from "react-router-dom";
import SupersImage from '../Images/supers.svg';
import Search from '../Images/search.svg';
import Fade from 'react-reveal/Fade';

const Supers = () => {
    return (
        <section id="navigator">
            <div className="box-icons-borders" />
            <div className="navigator-frame">
                <Fade>
                    <div className="navigator-item">
                        <Link to="/supers/0">
                            <span className="navigator-item-content"><img src={SupersImage} alt="Supers" className="icon" />Supers list</span>
                        </Link>
                    </div>
                </Fade>

                <Fade>
                    <div className="navigator-item">
                        <Link to="/search_super">
                            <span className="navigator-item-content"><img src={Search} alt="Search super" className="icon" />Search super</span>
                        </Link>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Supers;