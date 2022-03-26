import Fade from 'react-reveal/Fade';
import React from 'react';
import data from '../Data/data.json';
import { useNavigate, useParams } from "react-router-dom";

const SuperOmnidroidFrame = () => {
    let navigate = useNavigate();
    let [render, setRender] = React.useState(false);
    let superId = useParams().superId;
    let [dataElement, setDataElement] = React.useState(data[superId]);

    let [refreshSuper, ] = React.useState(true);
    let [refreshOmnidroid, ] = React.useState(true);
    
    let [percentageValueSuper, setPercentageValueSuper] = React.useState(100);
    let [percentageValueOmnidroid, setPercentageValueOmnidroid] = React.useState(100);

    React.useEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, 500);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        decreaseImageFilter("super");
        decreaseImageFilter("omnidroid");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataElement, navigate, superId]);

    React.useEffect(() => {
        setTimeout(() => {
            if (parseInt(superId) + 1 < data.length) {
                setRender(false);
                setDataElement(data[parseInt(superId) + 1]);
                navigate("/supers/" + (parseInt(superId) + 1), { replace: true });
            }
        }, 1400);
    }, [navigate, superId]);

    function decreaseImageFilter(type) {
        if (type === "super") {
            let stopCount = 0, duration = 20;
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
            let stopCount = 0, duration = 50;
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
    }

    return (
        <div className="super-omnidroid-frame">
            <div className="container-fluid h-100">
                <div className="row h-100" style={{ overflow: 'hidden' }}>
                    <div className="col-6 separator header">
                        <Fade duration={200}>
                            <div className="d-flex justify-content-between">
                                <div><h1 style={{ paddingLeft: 20 }}>OPPONENT</h1></div>
                                <div className="white-color" style={{ marginTop: 7 }}>
                                    <p className="d-inline mr-4">THREAT RATING:</p>
                                    <h2 className="mb-0 d-inline">{dataElement?.super.threatRating}</h2>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="col-6 separator header">
                        <Fade duration={200}>
                            <h1 style={{ paddingLeft: 20 }}>PROTOTYPE</h1>
                        </Fade>
                    </div>

                    <div className="col-6 p-0 separator content image">
                        <Fade duration={200}>
                            <img id="super-image" src={require('../Images/Supers/' + dataElement?.super.img)} alt="super" style={{ filter: refreshSuper ? `invert(${percentageValueSuper}%)` : 'invert(0%)' }} />
                            {dataElement?.super.terminated && render ? <Fade duration={200}><div className="terminated-frame">TERMINATED</div></Fade> : <></>}
                        </Fade>
                    </div>

                    <div className="col-6 p-0 separator content image">
                        <Fade duration={200}>
                            <img id="omnidroid-image" src={require('../Images/Omnidroids/' + dataElement?.omnidroid.img)} alt="omnidroid" style={{ filter: refreshOmnidroid ? `invert(${percentageValueOmnidroid}%)` : 'invert(0%)' }} />
                            {dataElement?.omnidroid.terminated && render ? <Fade duration={200}><div className="terminated-frame">TERMINATED</div></Fade> : <></>}
                        </Fade>
                    </div>

                    <div className="col-6 separator text-center white-color footer">
                        <Fade duration={200}>
                            <div className="mb-2 text-uppercase footer-h1"><h1>{dataElement?.super.name}</h1></div>
                            <p className="text-uppercase">
                                POWERS: {dataElement?.super.powers}
                            </p>
                        </Fade>
                    </div>

                    <div className="col-6 separator text-center white-color footer">
                        <Fade duration={200}>
                            <h1 className="footer-h1">OMNIDROID v.{dataElement?.omnidroid.name}</h1>
                            <p className="text-uppercase">
                                Features: {dataElement?.omnidroid.features}
                            </p>
                        </Fade>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SuperOmnidroidFrame;