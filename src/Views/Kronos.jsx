import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Kronos = () => {
    let [render, setRender] = useState(false);
    let [phase, setPhase] = useState(0); // Phase 0 => Just show title and image
    let navigate = useNavigate();

    useEffect(() => {
        const escHandler = (event) => {
            if (event.keyCode === 27) {
                navigate("/navigator");
            }
        };

        window.addEventListener("keyup", escHandler);

        return () => {
            window.removeEventListener("keyup", escHandler);
        };
    }, [navigate]);

    const BeginSimulation = () => {
        ResetImgFade();
        setPhase(1);

        setTimeout( () => {
            ResetImgFade();
            setPhase(2);
        }, 2000);

        setTimeout( () => {
            ResetImgFade();
            setPhase(3);
        }, 4000);

        setTimeout( () => {
            navigate("/kronos-countdown");
        }, 6000);
    };

    const ResetImgFade = () => {
        setRender(false);
        setRender(true);
    };
    
    const GenerateCharacters = (position) => {
        let text = "";
        
        if (position === "left")
            for (let i = 0; i < 290; i++)
            {
                let rand = Math.floor(Math.random() * 9).toString();
                if (rand % 3 === 1) text = text.concat("\n\n\n");
                text = text.concat(rand);
            }
        else
            for (let i = 0; i < 390; i++) {
                let rand = Math.floor(Math.random() * 9).toString();
                if (rand % 3 === 1) text = text.concat("\n\n\n");
                text = text.concat(rand);
            }

        return text;
    };

    const Phase1 = () => {
        return (
            <Fade duration={200}>
                <div className="mb-5 d-flex flex-row">
                    <div className="phase-name">PHASE 1</div>
                    <div className="phase-details text-uppercase">
                        <b style={{ fontSize: '22px', letterSpacing: '4px' }}>Loading sequence:</b><br/>
                        <span>1{'>'} Omnidroid delivery mode</span><br />
                        <span>2{'>'} Gantry Loading</span><br />
                        <span>3{'>'} Launch sequence</span><br />
                    </div>
                </div>
                { render ? 
                <Fade duration={1000}>
                    <img style={{ width: '90%' }} src={require('../Images/Kronos/phase_1.png')} alt="Phase 1" />
                </Fade> : <></> }
            </Fade>
        );
    }
    
    const Phase2 = () => {
        return (
            <Fade duration={200}>
                <div className="mb-5 d-flex flex-row">
                    <div className="phase-name">PHASE 2</div>
                    <div className="phase-details text-uppercase">
                        <b style={{ fontSize: '22px', letterSpacing: '4px' }}>Stage delivery:</b><br />
                        <span>1{'>'} ICSM Deployment</span><br />
                        <span>2{'>'} Glider separation</span><br />
                        <span>3{'>'} Omnidroid activation</span><br />
                    </div>
                </div>
                { render ? 
                <Fade duration={1000}>
                    <img style={{ width: '100%' }} src={require('../Images/Kronos/phase_2.png')} alt="Phase 2" />
                </Fade> : <></> }
            </Fade>
        );
    }
    
    const Phase3 = () => {
        return (
            <Fade duration={200}>
                <div className="mb-5 d-flex flex-row">
                    <div className="phase-name">PHASE 3</div>
                    <div className="phase-details text-uppercase">
                        <b style={{ fontSize: '22px', letterSpacing: '4px' }}>Activation:</b><br />
                        <span>1{'>'} Scan target zone</span><br />
                        <span>2{'>'} Offensive engagement</span><br />
                        <span>3{'>'} Remote override</span><br />
                    </div>
                </div>
                { render ? 
                <Fade duration={1000}>
                    <img style={{ width: '100%' }} src={require('../Images/Kronos/phase_3.png')} alt="Phase 3" />
                </Fade> : <></> }
            </Fade>
        );
    }

    return (
        <section id="kronos">
            <div className="container-fluid h-100">
                <div className="row h-100">

                    <div className="col-2 separator header" />
                    <div className="col-7 separator header" />
                    <div className="col-3 separator header" />

                    <div className="col-2 separator content lateral justify-content-between d-flex flex-column">
                        <Fade duration={200}>
                            <div className="secondary-color" style={{ wordWrap: "break-word", overflowY: "hidden", fontSize: '12px', wordSpacing: '10px', paddingRight: '100px' }}>
                                { GenerateCharacters("left") }
                            </div>
                            <div className="text-center">
                                <Link to="/kronos-countdown">
                                    <div className="button-kronos" style={{ fontSize: '20px', marginTop: 8 }}>COUNTDOWN</div>
                                </Link>
                                <div className="button-kronos" onClick={() => BeginSimulation()} style={{ fontSize: '20px', marginTop: 8 }}>SIMULATE</div>
                            </div>
                        </Fade>
                    </div>

                    <div className="col-7 separator content d-flex flex-column" style={{ justifyContent: phase === 2 ? 'space-between' : 'start' }}>
                        {(() => {
                            switch(phase) {
                                case 0:
                                    return Main();
                                case 1:
                                    return Phase1();
                                case 2:
                                    return Phase2();
                                case 3:
                                    return Phase3();
                                default:
                                    break;
                                }
                            })()
                        }
                    </div>

                    <div className="col-3 separator content lateral justify-content-between d-flex flex-column">
                        <Fade duration={200}>
                            <div className="secondary-color" style={{ wordWrap: "break-word", overflowY: "hidden", fontSize: '12px', wordSpacing: '10px', paddingRight: '100px' }}>
                                { GenerateCharacters("right") }
                            </div>
                            <div className="operation-phases-box text-center">
                                <div style={{ marginBottom: -20}}>OPERATION</div>
                                <span className="warning-color">KRONOS</span>
                                <div className="phase-frame">
                                    <div>PHASE:</div>
                                    <div className="steps">
                                        <div className={phase === 1 ? "step step-activated" : "step"} onClick={() => { setRender(true); setPhase(1);  }}>1</div>
                                        <div className={phase === 2 ? "step step-activated" : "step"} onClick={() => { setRender(true); setPhase(2); }}>2</div>
                                        <div className={phase === 3 ? "step step-activated" : "step"} onClick={() => { setRender(true); setPhase(3); }}>3</div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="col-2 separator footer" />
                    <div className="col-7 separator footer" />
                    <div className="col-3 separator footer" />

                </div>
            </div>
        </section>
    );
};

const Main = () => {
    return (
        <Fade duration={200}>
            <div className="row mb-5">
                <div className="col-7" style={{ marginRight: -20, marginTop: 10 }}>
                    <h1>OMNIDROID</h1>
                    <h3>FINAL DESIGN</h3>
                </div>
                <div className="col-3 secondary-color">
                    <div className="d-inline version-label">v.</div>
                    <div className="d-inline version-number">10</div>
                </div>
                <div className="col-2 text-center mt-4" style={{ marginLeft: 20 }}>
                    <img className="other-img" src={require('../Images/Kronos/kronos-shape.png')} alt="Kronos shape" />
                </div>
            </div>
            <img className="main-img" src={require('../Images/Kronos/omnidroid_v10_cut.png')} alt="Omnidroid V10" />
        </Fade>
    );
}

export default Kronos;