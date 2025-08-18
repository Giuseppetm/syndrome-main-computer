import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import supers from '../Data/supers.json';
import SupersImage from '../Images/supers.svg';
import Search from '../Images/search.svg';
import Fade from 'react-reveal/Fade';
import GlobalContext from '../Context/GlobalContext';

const Supers = () => {
    const navigate = useNavigate();
    const { setBlockScrollAnimation } = useContext(GlobalContext);

    const [navItem, setNavItem] = useState(null);

    const supersEndpoint = '/supers';
    const navItems = 2;

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
                        setBlockScrollAnimation(false);
                        navigate(`${supersEndpoint}/${supers[0].super.slug}`);
                        break;
                    case 1:
                        navigate("/search_super");
                        break;
                    default:
                        break;
                }
            }
        };

        const escHandler = (event) => {
            if (event.keyCode === 27) {
                navigate("/navigator");
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
    }, [navItem, navItems, navigate, setBlockScrollAnimation]);

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
                        <Link to={`${supersEndpoint}/${supers[0].super.slug}`} onClick={() => setBlockScrollAnimation(false)}>
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