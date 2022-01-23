import Fade from 'react-reveal/Fade';
import React from 'react';
import search_results from '../Data/search_results.json';
import { useNavigate, useParams } from "react-router-dom";

const SearchSuperResult = () => {
    let navigate = useNavigate();
    let [render, setRender] = React.useState(false);
    let superName = useParams().superName;
    let [dataElement, setDataElement] = React.useState(search_results.find(x => x.name.toLowerCase() === superName.toLowerCase()));
    console.log(superName, dataElement, search_results)

    React.useEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, 1200);
    }, [dataElement, navigate, superName]);

    return (
        <div className="search-super-result-frame">
            <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-5 separator">
                        
                        </div>

                        <div className="col-7 separator">
                        
                        </div>

                        <div className="col-5-image separator">
                            {/* image */}
                            <Fade duration={200}>
                                <div className="image">
                                    <img id="super-image" src={require('../Images/Search Results/' + dataElement?.img)} alt={dataElement?.img} />
                                </div>
                            </Fade>
                        </div>

                        <div className="col-7 separator result">
                            {/* text */}
                            <Fade duration={200}>
                                <div className="mb-3">
                                    <h1 className="text-uppercase">{dataElement?.name}</h1>
                                    <h5>LOCATION: {render ? <Fade duration={200}><span className="warning-color">{dataElement?.locationKnown ? <>KNOWN</> : <>UNKNOWN</>}</span></Fade> : <></>}</h5>
                                </div>
                                <div className="description text-uppercase">
                                    <p>
                                        {dataElement?.description}
                                    </p>
                                    <p>
                                        LAST ACTIVE RECORD: {dataElement?.lastActiveRecord}
                                    </p>
                                </div>
                            </Fade>
                        </div>



                        <div className="col-5 separator footer">
                        
                        </div>

                        <div className="col-7 separator footer">
                        
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default SearchSuperResult;