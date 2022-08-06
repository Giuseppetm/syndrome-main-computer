import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SupersImage from '../Images/supers.svg';
import Search from '../Images/search.svg';
import Fade from 'react-reveal/Fade';

const Supers = () => {
    let navigate = useNavigate();
    let [navItem, setNavItem] = React.useState(null);
    let navItems = 2;

    React.useEffect(() => {
        setTimeout(() => {
            setNavItem(0);
        }, 800);
    }, []);

    React.useEffect(() => {
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
                        navigate("/supers/0");
                        break;
                    case 1:
                        navigate("/search_super");
                        break;
                    default:
                        break;
                }
            }
        };

        window.addEventListener("keyup", downHandler);
        window.addEventListener("keyup", upHandler);
        window.addEventListener("keyup", enterHandler);

        return () => {
            window.removeEventListener("keyup", downHandler);
            window.removeEventListener("keyup", upHandler);
            window.removeEventListener("keyup", enterHandler);
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
                        <Link to="/supers/0">
                            <div className={buildClassName(0)} onMouseEnter={() => setNavItem(0)}>
                                <img src={SupersImage} alt="Supers" className="icon" />
                                Supers list
                            </div>
                        </Link>
                    </div>
                </Fade>

                <Fade>
                    <div className="navigator-item">
                        <Link to="/search_super">
                            <div className={buildClassName(1)} onMouseEnter={() => setNavItem(1)}>
                                <img src={Search} alt="Search super" className="icon" />
                                Search super
                            </div>
                        </Link>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Supers;