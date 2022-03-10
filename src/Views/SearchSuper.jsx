import Fade from 'react-reveal/Fade';
import React from 'react';
import { useNavigate } from "react-router-dom";

const SearchSuper = () => {
    let navigate = useNavigate();
    let [searchValue, setSearchValue] = React.useState("");

    React.useEffect(() => {
        const handleSubmit = () => {
            switch (searchValue.toLowerCase()) {
                case "elastigirl":
                    navigate("/search_super/elastigirl");
                    break;
                case "frozone":
                    navigate("/search_super/frozone");
                    break;
                case "dennis farina":
                    navigate("/search_super/dennis_farina");
                    break;
                case "":
                    break;
                default:
                    navigate("/notfound");
                    break;
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
    }, [navigate, searchValue]);

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