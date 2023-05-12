import './index.css';
import AnnounceCards from '../../components/AnnounceCards';
import Topbar from '../../components/Topbar';
import SearchBar from '../../components/Searchbar';
import Footer from '../../components/Footer';
import SearchbarMobile from '../../components/SearchbarMobile';
import { useEffect, useState } from 'react';
import Media from 'react-media';
import { GetAnnounces } from '../../API/api';
import { Link } from 'react-router-dom';
const Home = ({ theme, bodytheme }) => {
    const [getAnnounces, setGetAnnounces] = useState([]);
    const [n, setN] = useState(12);




    //fonctions qui récupère toutes les données de la collection annonces et coupé en fonction de n (nombre d'annonces par page)
    useEffect(() => {
        const awaitAnnounces = async () => {
            try {
                const data = await GetAnnounces();
                console.log('first data : ', data);
                const dataOrder = await data.sort((a, b) => new Date(b.date_perte) - new Date(a.date_perte));
                setGetAnnounces(dataOrder.slice(0, n));

            }
            catch (error) {
                console.log('Error : ', error);
            }
        }
        awaitAnnounces()

    }, [n]);
    //fonction qui change le nombre d'annonces' par page(+12)
    const handleMore = (e) => {
        e.preventDefault()
        setN(n => n + 12);
        setGetAnnounces(getAnnounces.slice(0, n));
    }
    //fonction passée en props qui r�cupère toutes les données de la collection annonces modifiées par la recherche
    const handleSearch = (dataSearch) => {
        setGetAnnounces(dataSearch)
    }
    console.log('my announces: ', getAnnounces)
    return (
        <>
            {getAnnounces && (<>
                {/* Home component */}
                <Topbar />
                <div className={`Home ${bodytheme}`}>
                    {/* Topbar component */}

                    {/* Media query for search bar */}
                    <Media query="(max-width: 780px)">
                        {/* Render mobile search bar if screen is smaller than 780px */}
                        {matches => matches ? <SearchbarMobile handleSearch={handleSearch} /> : <SearchBar handleSearch={handleSearch} />}
                    </Media>


                    {/* Announce cards */}
                    <AnnounceCards datas={getAnnounces} handleMore={handleMore} admin="false" theme={theme} />
                </div>
            </>)}
            <Footer />
        </>


    );
};
export default Home;
