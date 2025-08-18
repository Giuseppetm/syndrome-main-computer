import Fade from 'react-reveal/Fade';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import searchResults from '../Data/searchResults.json';

const SearchSuperResult = () => {
    const navigate = useNavigate();
    const [render, setRender] = useState(false);
    const superSlug = useParams().superName;
    const [superResult,] = useState(searchResults.find(x => x.slug.toLowerCase() === superSlug.toLowerCase()));

    useEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, 400);
    }, []);

    useEffect(() => {
        const escHandler = (event) => {
            if (event.keyCode === 27) {
                navigate("/search_super");
            }
        };

        window.addEventListener("keyup", escHandler);

        return () => {
            window.removeEventListener("keyup", escHandler);
        };
    }, [navigate]);

    return (
        <div className="search-super-result-frame">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-6 padded borded header" />

                    <div className="col-6 padded header" />

                    <div className="col-6 p-0 padded borded content image">
                        <Fade duration={200}>
                            <img id="super-image" src={require('../Images/Search Results/' + superResult?.img)} alt={superResult?.img} />
                        </Fade>
                    </div>

                    <div className="col-6 padded result content">
                        <Fade duration={200}>
                            <div className="mb-3">
                                <h1 className="text-uppercase">{superResult?.name}</h1>
                                <h5>LOCATION: {render ? <Fade duration={200}><span className="warning-color">{superResult?.locationKnown ? <>KNOWN</> : <>UNKNOWN</>}</span></Fade> : <></>}</h5>
                            </div>
                            <div className="description text-uppercase">
                                <p className="mb-2">
                                    {superResult?.description}
                                </p>
                                <p>
                                    LAST ACTIVE RECORD: {superResult?.lastActiveRecord}
                                </p>
                            </div>
                            {render ? <Fade duration={200}><span className="threat-rating text-uppercase">THREAT RATING: {superResult?.threatRating}</span></Fade> : <></> }
                        </Fade>
                    </div>

                    <div className="col-6 padded borded footer" />

                    <div className="col-6 padded footer" />
                </div>

            </div>
        </div>
    );
};

export default SearchSuperResult;