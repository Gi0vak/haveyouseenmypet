import './index.css';
import PetCards from '../../components/PetCards';
import Topbar from '../../components/Topbar';
import SearchBar from '../../components/Searchbar';
import SearchbarMobile from '../../components/SearchbarMobile';
import { useEffect, useState } from 'react';
import Media from 'react-media';
import { GetPets } from '../../API/api';
import { Link } from 'react-router-dom';
const Home = ({ theme, bodytheme }) => {
    const [getPets, setGetPets] = useState([]);
    const [n, setN] = useState(12);



    //fonctions qui récupère toutes les données de la collection pets et coupé en fonction de n (nombre de pets par page)
    useEffect(() => {
        const awaitPets = async () => {
            try {
                const data = await GetPets();
                const dataOrder = await data.sort((a, b) => new Date(b.date_perte) - new Date(a.date_perte));
                setGetPets(dataOrder.slice(0, n));
                console.log('first data : ', getPets)
            }
            catch (error) {
                console.log('Error : ', error);
            }
        }
        { getPets && awaitPets() }
    }, [n]);
    //fonction qui change le nombre de pets par page(+12)
    const handleMore = (e) => {
        e.preventDefault()
        setN(n => n + 12);
        setGetPets(getPets.slice(0, n));
    }
    //fonction passée en props qui r�cupère toutes les données de la collection pets modifiées par la recherche
    const handleSearch = (dataSearch) => {
        setGetPets(dataSearch)
    }
    return (
        <>
            {/* Home component */}
            <div className={`Home ${bodytheme}`}>
                {/* Topbar component */}
                <div className="relative">
                    <Topbar />
                </div>

                {/* Media query for search bar */}
                <Media query="(max-width: 780px)">
                    {/* Render mobile search bar if screen is smaller than 780px */}
                    {matches => matches ? <SearchbarMobile handleSearch={handleSearch} /> : <SearchBar handleSearch={handleSearch} />}
                </Media>

                {/* Admin button */}
                <Link to="/admin" >
                    {/* Button component */}
                    <button className='button-one admin-btn'>
                        Admin
                    </button>
                </Link>
                {/* Pet cards */}
                <PetCards datas={getPets} handleMore={handleMore} admin="false" theme={theme} />
            </div>
        </>


    );
};
export default Home;
