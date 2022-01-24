import React from 'react';
import Fade from 'react-reveal/Fade';

const Kronos = () => {
    let [phase, setPhase] = React.useState(0); /* Phase 0 => Just show title and image */

    return (
        <section id="kronos">
            <div className="container-fluid h-100">
                <div className="row h-100">

                    <div className="col-2 separator header" />
                    <div className="col-7 separator header" />
                    <div className="col-3 separator header" />

                    <div className="col-2 separator content lateral">
                        <Fade duration={200}>
                            { /* random characters */}
                        </Fade>
                    </div>

                    <div className="col-7 separator content">
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

                    <div className="col-3 separator content lateral" style={{ justifyContent: 'flex-end', display: 'flex', flexDirection: 'column'}}>
                        <Fade duration={200}>
                            { /* random characters, operation kronos, phase ecc. */}
                            <div className="operation-phases-box text-center">
                                <div style={{ marginBottom: -20}}>OPERATION</div>
                                <span className="warning-color">KRONOS</span>
                                <div className="phase-frame">
                                    <div className="d-inline">PHASE:</div>
                                    <div className="steps d-inline">
                                        <div className={phase === 1 ? "d-inline step step-activated" : "d-inline step"} onClick={() => setPhase(1)}>1</div>
                                        <div className={phase === 2 ? "d-inline step step-activated" : "d-inline step"} onClick={() => setPhase(2)}>2</div>
                                        <div className={phase === 3 ? "d-inline step step-activated" : "d-inline step"} onClick={() => setPhase(3)}>3</div>
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
    )
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

const Phase1 = () => {
    return (
        <Fade duration={200}>
            <div className="mb-5 row">
                <div className="col-6 phase-name d-inline">PHASE 1</div>
                <div className="col-3 phase-details text-uppercase">
                    <b style={{fontSize: '1.0vw', letterSpacing: '0.2vw'}}>Loading sequence:</b><br/>
                    <span>1{'>'} Omnidroid delivery mode</span><br />
                    <span>2{'>'} Gantry Loading</span><br />
                    <span>3{'>'} Launch sequence</span><br />
                </div>
            </div>
            <img style={{ width: '90%' }} src={require('../Images/Kronos/phase_1.png')} alt="Phase 1" />
        </Fade>
    );
}

const Phase2 = () => {
    return (
        <Fade duration={200}>
            <div className="mb-5 row">
                <div className="col-6 phase-name d-inline">PHASE 2</div>
                <div className="col-3 phase-details text-uppercase">
                    <b style={{ fontSize: '1.1vw', letterSpacing: '0.2vw' }}>Stage delivery:</b><br />
                    <span>1{'>'} ICSM Deployment</span><br />
                    <span>2{'>'} Glider separation</span><br />
                    <span>3{'>'} Omnidroid activation</span><br />
                </div>
            </div>
            <img style={{ width: '100%' }} src={require('../Images/Kronos/phase_2.png')} alt="Phase 2" />
        </Fade>
    );
}

const Phase3 = () => {
    return (
        <Fade duration={200}>
            <div className="mb-5 row">
                <div className="col-6 phase-name d-inline">PHASE 3</div>
                <div className="col-3 phase-details text-uppercase">
                    <b style={{ fontSize: '1.1vw', letterSpacing: '0.2vw' }}>Activation:</b><br />
                    <span>1{'>'} Scan target zone</span><br />
                    <span>2{'>'} Offensive engagement</span><br />
                    <span>3{'>'} Remote override</span><br />
                </div>
            </div>
            <img style={{ width: '100%' }} src={require('../Images/Kronos/phase_3.png')} alt="Phase 3" />
        </Fade>
    );
}

export default Kronos;