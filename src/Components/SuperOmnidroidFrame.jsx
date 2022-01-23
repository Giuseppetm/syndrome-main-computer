import Fade from 'react-reveal/Fade';
import React from 'react';
import data from '../Data/data.json';
import { useNavigate, useParams } from "react-router-dom";

const SuperOmnidroidFrame = () => {
    let navigate = useNavigate();
    let [render, setRender] = React.useState(false);
    let superId = useParams().superId;
    let [dataElement, setDataElement] = React.useState(data[superId]);

    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }

    const superImages = importAll(require.context('../Images/Supers', false, /\.(png|jpe?g|svg)$/));
    const omnidroidImages = importAll(require.context('../Images/Omnidroids', false, /\.(png|jpe?g|svg)$/));
    
    React.useEffect( () => {
        setTimeout(() => {
            setRender(true);
        }, 800);
    }, [dataElement, navigate, superId]);

    React.useEffect(() => {
        setTimeout(() => { 
            if (parseInt(superId) + 1 < data.length) {
                setRender(false);
                setDataElement(data[parseInt(superId) + 1]);
                navigate("/supers/" + (parseInt(superId) + 1), { replace: true }); 
            }
        }, 1500);
    }, [navigate, superId]);
    
    return (
        <div className="super-omnidroid-frame">
            <div className="container-fluid h-100">
                <div className="row h-100">
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
                        {/* image */}
                        <Fade duration={200}>
                            <img id="super-image" src={superImages[dataElement?.super.img]} alt="super" />
                            {dataElement?.super.terminated && render ? <Fade duration={200}><div className="terminated-frame">TERMINATED</div></Fade> : <></> }
                        </Fade>
                    </div>

                    <div className="col-6 p-0 separator content image">
                        {/* image */}
                        <Fade duration={200}>
                            <img id="omnidroid-image" src={omnidroidImages[dataElement?.omnidroid.img]} alt="omnidroid" />
                            {dataElement?.omnidroid.terminated && render ? <Fade duration={200}><div className="terminated-frame">TERMINATED</div></Fade> : <></>}
                        </Fade>
                    </div>

                    <div className="col-6 separator text-center white-color footer">
                        <Fade duration={200}>
                            <div className="mb-2 text-uppercase"><h1>{dataElement?.super.name}</h1></div>
                            <p className="text-uppercase">
                                POWERS: {dataElement?.super.powers}
                            </p>
                        </Fade>
                    </div>

                    <div className="col-6 separator text-center white-color footer">
                        <Fade duration={200}>
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