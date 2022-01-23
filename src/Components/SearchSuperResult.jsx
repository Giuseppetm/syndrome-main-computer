import Fade from 'react-reveal/Fade';
import React from 'react';
import data from '../Data/data.json';
import { useNavigate, useParams } from "react-router-dom";

const SearchSuperResult = () => {
    let navigate = useNavigate();
    let [render, setRender] = React.useState(false);
    let superId = useParams().superId;
    let [dataElement, setDataElement] = React.useState(data[superId]);

    React.useEffect(() => {
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
        <div className="search-super-result-frame">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6"> { /*  min height: 100vh*/}
                       { /* img */}
                    </div>

                    <div className="col-6"> { /*  min height: 100vh*/}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchSuperResult;