// import { Link } from "react-router-dom";
import { GetSearch } from "../../API/api";
import loupeMobile from "../../assets/pictures/loupeMobile.svg";
import filter from "../../assets/pictures/filter.svg";
import location from "../../assets/pictures/location.svg";
import { useState, useEffect } from 'react';
import './index.css';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';


const SearchbarMobile = ({ handleSearch }) => {
    // Déclaration des états
    const [searchValueOne, setSearchValueOne] = useState("");
    const [searchValueTwo, setSearchValueTwo] = useState("");
    const [searchValueThree, setSearchValueThree] = useState("");
    const [checked, setChecked] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [placeholder1, setPlaceholder1] = useState("Filter by title, companies, expertise...");
    const [placeholder2, setPlaceholder2] = useState("Filter by location...");
    const { theme } = useContext(ThemeContext);

    // Fonction qui permet de controler le position sticky de la barre de recherche
    useEffect(() => {
        const handleScroll = () => {

            const scrollTop = window.pageYOffset;
            if (scrollTop > 121) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // Fonction appelée lorsque l'utilisateur tape quelque chose dans la barre de recherche 
    const handleInputOneChange = (event) => {
        setSearchValueOne(event.target.value);
    };
    const handleInputTwoChange = (event) => {
        setSearchValueTwo(event.target.value);
    };
    // Fonction qui construit la requête de la barre de recherche
    const buildSearchQuery = (searchValueOne, searchValueTwo, checkInput) => {
        let searchQuery = '';

        if (searchValueOne && searchValueOne !== '') {
            searchQuery += `position=${searchValueOne}`;
        }

        if (searchValueTwo) {
            searchQuery += `${searchQuery ? '&' : ''}location=${searchValueTwo}`;
        }

        if (checkInput) {
            searchQuery += `${searchQuery ? '&' : ''}checkInput=${checkInput}`;
        }

        return searchQuery;
    };
    // Fonction qui lance la requête API pour la recherche
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await GetSearch(buildSearchQuery(searchValueOne, searchValueTwo, searchValueThree));
            return await handleSearch(data)
        } catch (error) {
            console.log(error);
        }
    }



    return (

        <form className={`form-mobile ${isSticky ? 'sticky' : ''} ${theme}`} onSubmit={handleSubmit}>
            <div className="grid-filter">

                <input
                    className="input-filter"
                    placeholder="Filter..."
                    name="search"
                    id="search"
                    autoComplete="off"
                    spellCheck="false"
                    autoCapitalize="off"
                    value={searchValueOne}
                    onChange={handleInputOneChange}
                    autoCorrect="off"
                    type="text"
                />

            </div>
            <div className="grid-button">
                <button className="button-one " type="submit"><img src={loupeMobile} alt="search" /></button>
            </div>

        </form>


    );
};

export default SearchbarMobile;
