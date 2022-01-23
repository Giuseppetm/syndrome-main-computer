import Fade from 'react-reveal/Fade';
import React from 'react';
import data from '../Data/data.json';
import { useNavigate, useParams } from "react-router-dom";

const SuperOmnidroidFrame = () => {
    let navigate = useNavigate();
    let [render, setRender] = React.useState(false);
    let superId = useParams().superId;
    let [dataElement, setDataElement] = React.useState(data[superId]);
    
    React.useEffect( () => {
        setTimeout(() => {
            setRender(true);
        }, 1000);
    }, [dataElement, navigate, superId]);

    React.useEffect(() => {
        setTimeout(() => { 
            if (parseInt(superId) + 1 < data.length) {
                setRender(false);
                setDataElement(data[parseInt(superId) + 1]);
                navigate("/supers/" + (parseInt(superId) + 1), { replace: true }); 
            }
        }, 2500);
    }, [navigate, superId]);
    
    return (
        <div className="super-omnidroid-frame">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 separator">
                        <Fade>
                            <div className="d-flex justify-content-between">
                                <div><h1>OPPONENT</h1></div>
                                <div className="white-color" style={{ marginTop: 7 }}>
                                    <p className="d-inline mr-4">THREAT RATING:</p> 
                                    <h2 className="mb-0 d-inline">{dataElement?.super.threatRating}</h2>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="col-6 separator">
                        <Fade>
                            <h1>PROTOTYPE</h1>
                        </Fade>
                    </div>

                    <div className="col-6-image separator">
                        {/* image */}
                        <Fade>
                            <div className="image">
                                <img id="super-image" src={require("../Images/Supers/" + dataElement?.super.img)} alt="super" />
                                {dataElement?.super.terminated && render ? <Fade><div className="terminated-frame">TERMINATED</div></Fade> : <></> }
                            </div>
                        </Fade>
                    </div>

                    <div className="col-6-image separator">
                        {/* image */}
                        <Fade>
                            <div className="image">
                                <img id="omnidroid-image" src={require("../Images/Omnidroids/" + dataElement?.omnidroid.img)} alt="omnidroid" />
                                {dataElement?.omnidroid.terminated && render ? <Fade><div className="terminated-frame">TERMINATED</div></Fade> : <></>}
                            </div>
                        </Fade>
                    </div>

                    <div className="col-6 separator text-center white-color footer">
                        <Fade>
                            <div className="mb-2 text-uppercase"><h1>{dataElement?.super.name}</h1></div>
                            <p className="text-uppercase">
                                POWERS: {dataElement?.super.powers}
                            </p>
                        </Fade>
                    </div>

                    <div className="col-6 separator text-center white-color footer">
                        <Fade>
                            <h1>OMNIDROID v.{dataElement?.omnidroid.name}</h1>
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