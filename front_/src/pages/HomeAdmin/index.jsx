import './index.css';
import AnnounceCards from '../../components/AnnounceCards';
import Topbar from '../../components/Topbar';
import SearchBar from '../../components/Searchbar';
import SearchbarMobile from '../../components/SearchbarMobile';
import { useEffect, useState } from 'react';
import Media from 'react-media';
import { GetAnnounces } from '../../API/api';
import { Link } from 'react-router-dom';
import { UpdateAnnounce } from '../../API/api';
const Home = ({ theme, bodytheme }) => {
    const [getAnnounces, setGetAnnounces] = useState([]);
    const [n, setN] = useState(12);


    useEffect(() => {
        const awaitAnnounces = async () => {
            try {
                const data = await GetAnnounces();
                const dataOrder = await data.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
                setGetAnnounces(dataOrder.slice(0, n));
                console.log('first data : ', getAnnounces);
            }
            catch (error) {
                console.log('Error : ', error);
            }
        }
        awaitAnnounces();
    }, [n]);

    const handleMore = (e) => {
        e.preventDefault()
        setN(n => n + 12);
        setGetAnnounces(getAnnounces.slice(0, n));
    }
    const handleUpdate = async (id) => {
        try {
            const res = await UpdateAnnounce(id)
            console.log(res);

        } catch (error) {
            console.log(error);
        }
    }
    const handleSearch = (dataSearch) => {
        setGetAnnounces(dataSearch)

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
                <Link to="/newuser" >
                    <button className='button-one add-announce-btn'>
                        Add an announce
                    </button>
                </Link>
                <Media query="(max-width: 780px)">
                    {matches => matches ? <SearchbarMobile /> : <SearchBar />}
                </Media>
                <AnnounceCards
                    datas={getAnnounces}
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
