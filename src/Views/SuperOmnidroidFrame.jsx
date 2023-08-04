import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import supers from '../Data/supers.json';
import GlobalContext from '../Context/GlobalContext';

const SuperOmnidroidFrame = () => {
    const navigate = useNavigate();
    const { blockScrollAnimation, setBlockScrollAnimation } = useContext(GlobalContext);
    const [render, setRender] = useState(false);

    const superSlug = useParams().superSlug;
    const steady = useLocation().state?.steady ?? false; // Used for search result related to super/omnidroid data

    const [superOmnidroid, setSuperOmnidroid] = useState(supers.find(x => x.super.slug === superSlug));
    
    const [percentageValueSuper, setPercentageValueSuper] = useState(100);
    const [percentageValueOmnidroid, setPercentageValueOmnidroid] = useState(100);
    
    const supersEndpoint = '/supers';
    const updateTiming = 350; // Milliseconds; the movie uses around 300

    useEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, updateTiming);
        
        decreaseImageFilter("super");
        decreaseImageFilter("omnidroid");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [superOmnidroid, navigate, superSlug]);

    useEffect(() => {
        if (steady === false  && blockScrollAnimation === false) {
            const timeout = setTimeout(() => {
                if (blockScrollAnimation === true) clearTimeout();

                const nextSuperOmnidroidId = parseInt(supers.findIndex(x => x === superOmnidroid)) + 1;
                
                if (nextSuperOmnidroidId < supers.length && blockScrollAnimation === false) {
                    setRender(false);
                    setSuperOmnidroid(supers[nextSuperOmnidroidId]);
                    navigate(`${supersEndpoint}/${supers[nextSuperOmnidroidId].super.slug}`, { replace: true });
                }
            }, 1200);

            if (blockScrollAnimation === true) clearTimeout(timeout);
        }
    }, [navigate, superSlug, steady, superOmnidroid, blockScrollAnimation, setBlockScrollAnimation]);

    function decreaseImageFilter(type) {
        if (type === "super") {
            let stopCount = 0, duration = 1;
            setPercentageValueSuper(100);

            let startCount = percentageValueSuper, intervalTime = duration / Math.abs(startCount - stopCount);
        
            let countDown = setInterval(
                function () {
                    if (startCount === stopCount) clearInterval(countDown)
                    
                    if (startCount > stopCount) {
                        startCount--
                    } else {
                        startCount++
                    }

                    setPercentageValueSuper(startCount);
                },
                intervalTime
            );
        } else if (type === "omnidroid") {
            let stopCount = 0, duration = 1;
            setPercentageValueOmnidroid(100);

            let startCount = percentageValueOmnidroid, intervalTime = duration / Math.abs(startCount - stopCount);
        
            let countDown = setInterval(
                function () {
                    if (startCount === stopCount) clearInterval(countDown)
                    
                    if (startCount > stopCount) {
                        startCount--
                    } else {
                        startCount++
                    }

                    setPercentageValueOmnidroid(startCount);
                },
                intervalTime
            );
        }
    };

    useEffect(() => {
        const escHandler = (event) => {
            if (event.keyCode === 27) {
                setBlockScrollAnimation(true);
                navigate("/supers");
            }
        };

        const onBackButtonEvent = (event) => {
            setBlockScrollAnimation(true);
            event.preventDefault();
            navigate("/supers");
        };

        window.addEventListener("keyup", escHandler);
        window.addEventListener("popstate", onBackButtonEvent);
        
        return () => {
            window.removeEventListener("keyup", escHandler);
            window.removeEventListener("popstate", onBackButtonEvent);  
        };
    }, [navigate, setBlockScrollAnimation]);

    return (
        <div className="super-omnidroid-frame">
            <div className="container-fluid h-100">
                <div className="row h-100" style={{ overflow: 'hidden' }}>
                    <div className="col-6 padded borded header">
                        <Fade duration={200}>
                            <div className="d-flex justify-content-between align-baseline">
                                <div><h1 style={{ paddingLeft: 20 }}>OPPONENT</h1></div>
                                <div className="white-color d-flex gap-2 align-items-end" style={{ filter: superOmnidroid?.super.refresh || steady ? `invert(${percentageValueSuper}%)` : 'invert(0%)' }}>
                                    <p className="mb-1">THREAT RATING:</p>
                                    <h2>{superOmnidroid?.super.threatRating}</h2>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="col-6 padded header">
                        <Fade duration={200}>
                            <h1 style={{ paddingLeft: 20 }}>PROTOTYPE</h1>
                        </Fade>
                    </div>

                    <div className="col-6 p-0 padded borded content image">
                        <Fade duration={200}>
                            <img id="super-image" src={require('../Images/Supers/' + superOmnidroid?.super.img)} alt={superOmnidroid.super.name} style={{ filter: superOmnidroid?.super.refresh || steady ? `invert(${percentageValueSuper}%)` : 'invert(0%)' }} />
                            {superOmnidroid?.super.terminated && render ? <Fade duration={200}><div className="terminated-frame">TERMINATED</div></Fade> : <></>}
                        </Fade>
                    </div>

                    <div className="col-6 p-0 padded content image">
                        <Fade duration={200}>
                            <img id="omnidroid-image" src={require('../Images/Omnidroids/' + superOmnidroid?.omnidroid.img)} alt={superOmnidroid.omnidroid.name} style={{ filter: superOmnidroid?.omnidroid.refresh || steady ? `invert(${percentageValueOmnidroid}%)` : 'invert(0%)' }} />
                            {superOmnidroid?.omnidroid.terminated && render ? <Fade duration={200}><div className="terminated-frame">TERMINATED</div></Fade> : <></>}
                        </Fade>
                    </div>

                    <div className="col-6 padded borded text-center white-color footer">
                        <Fade duration={200}>
                            <div style={{ filter: superOmnidroid?.super.refresh || steady ? `invert(${percentageValueSuper}%)` : 'invert(0%)' }}>
                                <div className="mb-2 text-uppercase footer-h1"><h1>{superOmnidroid?.super.name}</h1></div>
                                <p className="text-uppercase">
                                    POWERS: {superOmnidroid?.super.powers}
                                </p>
                            </div>
                        </Fade>
                    </div>

                    <div className="col-6 padded text-center white-color footer">
                        <Fade duration={200}>
                            <div style={{ filter: superOmnidroid?.omnidroid.refresh || steady ? `invert(${percentageValueSuper}%)` : 'invert(0%)' }}>
                                <h1 className="mb-2 text-uppercase footer-h1">OMNIDROID v.{superOmnidroid?.omnidroid.name}</h1>
                                <p className="text-uppercase">
                                    Features: {superOmnidroid?.omnidroid.features}
                                </p>
                            </div>
                        </Fade>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SuperOmnidroidFrame;