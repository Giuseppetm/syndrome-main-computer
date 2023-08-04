import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link, useNavigate } from 'react-router-dom';
import Dollar from '../Images/dollar.svg';
import Isle from '../Images/isle.svg';
import Omnidroid from '../Images/omnidroid.svg';
import Supers from '../Images/supers.svg';

const Navigator = () => {
    let navigate = useNavigate();
    let [navItem, setNavItem] = useState(null);
    let navItems = 4;

    useEffect(() => {
        setTimeout(() => {
            setNavItem(0);
        }, 300);
    }, []);

    useEffect(() => {
        const downHandler = (event) => {
            if (event.keyCode === 40) {
                setNavItem((navItem + 1) % navItems);
            }
        };

        const upHandler = (event) => {
            if (event.keyCode === 38) {
                setNavItem(((navItem - 1 + navItems) % navItems));
            }
        };

        const enterHandler = (event) => {
            if (event.keyCode === 13) {
                switch (navItem) {
                    case 0: 
                        navigate("/kronos");
                        break;
                    case 3:
                        navigate("/supers");
                        break;
                    default:
                        break;
                }
            }
        };

        const escHandler = (event) => {
            if (event.keyCode === 27) {
                navigate("/authentication");
            }
        };

        window.addEventListener("keyup", downHandler);
        window.addEventListener("keyup", upHandler);
        window.addEventListener("keyup", enterHandler);
        window.addEventListener("keyup", escHandler);

        return () => {
            window.removeEventListener("keyup", downHandler);
            window.removeEventListener("keyup", upHandler);
            window.removeEventListener("keyup", enterHandler);
            window.removeEventListener("keyup", escHandler);
        };
    }, [navItem, navItems, navigate]);

    const buildClassName = (key) => {
        if (key === navItem) return "navigator-item-content navigator-item-content-active";
        return "navigator-item-content";
    };

    return (
        <section id="navigator">
            <div className="box-icons-borders" />

            <div className="navigator-frame">
                <Fade>
                    <div className="navigator-item">
                        <Link to="/kronos">
                            <div className={buildClassName(0)} onMouseEnter={() => setNavItem(0)}>
                                <img src={Isle} alt="Isle" className="icon" />
                                Island operations
                            </div>
                        </Link>
                    </div>
                </Fade>

                <Fade>
                    <div className="navigator-item disabled">
                        <div className={buildClassName(1)} onMouseEnter={() => setNavItem(1)}>
                            <img src={Dollar} alt="Finances" className="icon" />
                            Finances
                        </div>
                    </div>
                </Fade>

                <Fade>
                    <div className="navigator-item disabled">
                        <div className={buildClassName(2)} onMouseEnter={() => setNavItem(2)}>
                            <img src={Omnidroid} alt="Omnidroid" className="icon" />
                            Omnidroid metatraining
                        </div>
                    </div>
                </Fade>

                <Fade>
                    <div className="navigator-item">
                        <Link to="/supers">
                            <div className={buildClassName(3)} onMouseEnter={() => setNavItem(3)}>
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
