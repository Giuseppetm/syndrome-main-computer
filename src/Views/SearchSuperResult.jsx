import Fade from 'react-reveal/Fade';
import React from 'react';
import search_results from '../Data/search_results.json';
import { useParams } from "react-router-dom";

const SearchSuperResult = () => {
    let [render, setRender] = React.useState(false);
    let superName = useParams().superName;
    let [superResult,] = React.useState(search_results.find(x => x.name.toLowerCase() === superName.toLowerCase()));
    console.log(superName, superResult, search_results)

    React.useEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, 600);
    }, []);

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