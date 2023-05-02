import './index.css';
import PetCards from '../../components/PetCards';
import Topbar from '../../components/Topbar';
import SearchBar from '../../components/Searchbar';
import SearchbarMobile from '../../components/SearchbarMobile';
import { useEffect, useState } from 'react';
import Media from 'react-media';
import { GetPets } from '../../API/api';
import { Link } from 'react-router-dom';
import { UpdatePet } from '../../API/api';
const Home = ({ theme, bodytheme }) => {
    const [getPets, setGetPets] = useState([]);
    const [n, setN] = useState(12);


    useEffect(() => {
        const awaitPets = async () => {
            try {
                const data = await GetPets();
                const dataOrder = await data.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
                setGetPets(dataOrder.slice(0, n));
                console.log('first data : ', getPets);
            }
            catch (error) {
                console.log('Error : ', error);
            }
        }
        awaitPets();
    }, [n]);

    const handleMore = (e) => {
        e.preventDefault()
        setN(n => n + 12);
        setGetPets(getPets.slice(0, n));
    }
    const handleUpdate = async (id) => {
        try {
            const res = await UpdatePet(id)
            console.log(res);

        } catch (error) {
            console.log(error);
        }
    }
    const handleSearch = (dataSearch) => {
        setGetPets(dataSearch)

    }
    return (
        <>
            <div className={`Home ${bodytheme}`}>
                <div className="relative">
                    <Topbar />
                </div>
                <div className='admin-back-home'>
                    <Link to="/">Home</Link>
                </div>
                <Link to="/newpet" >
                    <button className='button-one add-pet-btn'>
                        Add a pet
                    </button>
                </Link>
                <Media query="(max-width: 780px)">
                    {matches => matches ? <SearchbarMobile /> : <SearchBar />}
                </Media>
                <PetCards
                    datas={getPets}
                    handleMore={handleMore}
                    handleSearch={handleSearch}
                    handleUpdate={handleUpdate}
                    admin="true"
                    theme={theme} />
            </div>

        </>

    );
};
export default Home;
