import Fade from 'react-reveal/Fade';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Authentication = () => {
    let navigate = useNavigate();
    let [passwordValue, setPasswordValue] = React.useState("PASSWORD");
    
    useEffect(() => {
        setTimeout(() => {
            setPasswordValue("");
        }, 1500);
    }, [])

    useEffect(() => {
        const handleSubmit = () => {
            if (passwordValue.toLowerCase() === "kronos") {
                navigate("/navigator");
            }
        }

        const listener = event => {
            var key = event.which || event.keyCode || 0;
            if (event.code === "Enter" || event.code === "NumpadEnter" || key === 13) {
                event.preventDefault();
                handleSubmit();
            }
        };

        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [navigate, passwordValue]);

    return (
        <section id="authentication">
            <Fade>
                <div className="password-frame">
                    <input autoFocus type="text" value={passwordValue} autocomplete="off" onInput={e => setPasswordValue(e.target.value)} id="password-field" name="password-field" maxLength={6} />
                </div>
            </Fade>
        </section>
    );
};

export default Authentication;