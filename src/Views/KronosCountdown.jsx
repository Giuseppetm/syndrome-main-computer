import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

const KronosCountdown = (props) => {
    const { initialMinute = 10,initialSeconds = 42 } = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [ seconds, setSeconds ] =  useState(initialSeconds);

    useEffect( () => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <section id="kronos-countdown">
            <Fade duration={1000}>
                <div className="content text-center">
                    <div style={{ marginBottom: 50 }}><h1>PROJECT KRONOS COUNTDOWN</h1></div>
                
                    <div className="countdown">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="col-3 mb-4 mt-4">
                                    <div className="clock-word">08</div>
                                    <div className="clock-description">HOURS</div>
                                </div>

                                <div className="col-1 mb-4 mt-4">
                                    <div className="clock-word">:</div>
                                </div>

                                <div className="col-3 mb-4 mt-4">
                                    <div className="clock-word">{minutes}</div>
                                    <div className="clock-description">MINUTES</div>
                                </div>

                                <div className="col-1 mb-4 mt-4">
                                    <div className="clock-word">:</div>
                                </div>

                                <div className="col-3 mb-4 mt-4">
                                    <div className="clock-word">{seconds}</div>
                                    <div className="clock-description">SECONDS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div style={{ marginTop: 50 }}><h1>UNTIL LAUNCH</h1></div>
                
                </div>
            </Fade>
        </section>
    )
};

export default KronosCountdown;