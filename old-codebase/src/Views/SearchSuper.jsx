import Fade from 'react-reveal/Fade';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import supers from '../Data/supers.json';
import searchResults from '../Data/searchResults.json';

const SearchSuper = () => {
    let navigate = useNavigate();
    let [searchValue, setSearchValue] = useState("");
    const searchSuperEndpoint = '/search_super';
    const supersEndpoint = '/supers';

    useEffect(() => {
        const handleSubmit = () => {
            // Handle basic search (not omnidroid related)
            const superElementSearch = searchResults.find(x => x.name.toLowerCase() === searchValue.toLowerCase());
            if (superElementSearch) {
                navigate(`${searchSuperEndpoint}/${superElementSearch.slug}`);
                return;
            }
            
            // Handle omnidroid related search
            const superElementsOmnidroid = supers.filter(x => x.super.name.toLowerCase() === searchValue.toLowerCase());
            if (superElementsOmnidroid && superElementsOmnidroid.length === 2) {
                navigate(`${supersEndpoint}/${superElementsOmnidroid[1].super.slug}`, { state: { steady: true } });
                return;
            }

            navigate("/notfound");
        };

        const listener = event => {
            var key = event.which || event.keyCode || 0;
            if (event.code === "Enter" || event.code === "NumpadEnter" || key === 13) {
                event.preventDefault();
                handleSubmit();
            }
        };

        const escHandler = (event) => {
            if (event.keyCode === 27) {
                navigate("/supers");
            }
        };

        window.addEventListener("keydown", listener);
        window.addEventListener("keyup", escHandler);

        return () => {
            window.removeEventListener("keydown", listener);
            window.removeEventListener("keyup", escHandler);
        };
    }, [navigate, searchValue]);

    return (
        <section id="search-super">
            <div className="box-icons-borders1" />
            <div className="box-icons-borders2" />
            <Fade>
                <div className="container-fluid p-0">
                    <div className="search-box d-flex flex-row align-items-center">
                        <div className="label">SEARCH:</div>

                        <div className="input-text">
                            <input autoFocus type="text" value={searchValue} autoComplete="off" onInput={e => setSearchValue(e.target.value)} id="search-field" name="search-field" maxLength={16} />
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default SearchSuper;