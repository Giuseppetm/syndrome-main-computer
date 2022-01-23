import Fade from 'react-reveal/Fade';
import React from 'react';
import data from '../Data/data.json';
import { useNavigate } from "react-router-dom";

const SearchSuper = () => {
    let navigate = useNavigate();

    let [searchValue, setSearchValue] = React.useState("");

    return (
        <section id="search-super">
            <div className="box-icons-borders1" />
            <div className="box-icons-borders2" />
            <Fade>
                <div className="container-fluid">
                    <div className="search-box">
                        <div className="row">
                            <div className="label col-3">SEARCH:</div>

                            <div className="input-text col-9">
                                <input autoFocus type="text" value={searchValue} onInput={e => setSearchValue(e.target.value)} id="search-field" name="search-field" maxLength={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default SearchSuper;