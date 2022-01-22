const SuperOmnidroidFrame = (props) => {
    return (
        <div className="super-omnidroid-frame">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 separator">
                        <div className="d-flex justify-content-between">
                            <div><h1>OPPONENT</h1></div>
                            <div>
                                <span className="threat-text">THREAT RATING:</span>
                                <span className="threat-value">2.9</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 separator">
                        <h1>PROTOTYPE</h1>
                    </div>

                    <div className="col-6-image separator">
                        {/* image */}
                        <div className="image">
                            <img src={require("../Images/Supers/universal_man.png")} alt="universal_man" />
                        </div>
                    </div>

                    <div className="col-6-image separator">
                        {/* image */}
                        <div className="image">
                            <img src={require("../Images/Omnidroids/omnitest.png")} alt="omnidroid" />
                        </div>
                    </div>

                    <div className="col-6 separator text-center white-color footer">
                        <div className="mb-2"><h1>UNIVERSAL MAN</h1></div>
                        <div className="description">
                            POWERS: ATOMIC DENSITY MANIPULATION
                        </div>
                    </div>

                    <div className="col-6 separator text-center white-color footer">
                        <h1>OMNIDROID v.X1</h1>
                        <div className="description">
                            FEATURES: THREADED LOCOMOTION, SENSORY DISPLAY, BEARTICULATED
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SuperOmnidroidFrame;