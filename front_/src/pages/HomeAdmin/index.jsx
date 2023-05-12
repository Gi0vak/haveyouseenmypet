import './index.css';
import AnnounceCards from '../../components/AnnounceCards';
import Topbar from '../../components/Topbar';
import SearchBar from '../../components/Searchbar';
import SearchbarMobile from '../../components/SearchbarMobile';
import { useEffect, useState } from 'react';
import Media from 'react-media';
import { GetAnnounces } from '../../API/api';
import { DeleteAnnounce } from '../../API/api';
import { Link } from 'react-router-dom';
import { UpdateAnnounce } from '../../API/api';
import { useNavigate } from 'react-router-dom';
const Home = ({ theme, bodytheme }) => {
    const navigate = useNavigate();
    const [getAnnounces, setGetAnnounces] = useState([]);
    const [n, setN] = useState(12);


    useEffect(() => {
        const awaitAnnounces = async () => {
            try {
                const data = await GetAnnounces();
                const dataOrder = await data.sort((a, b) => new Date(b.date_perte) - new Date(a.date_perte));
                setGetAnnounces(dataOrder.slice(0, n));

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
    const handleDelete = async (e, id) => {
        e.preventDefault();
        const confirm = window.confirm('Voulez-vous vraiment supprimer cette annonce?');
        if (confirm) {

            console.log("L'élément a été supprimé");

            try {
                const announce = await DeleteAnnounce(id)
                console.log('the announce this id is deleted', announce);

                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('vous avez annulé la suppression de l\'annonce');
        }
    }
    const handleNewAnnounce = async () => {

        navigate("/newuser");
    }
    const handleSearch = (dataSearch) => {
        setGetAnnounces(dataSearch)

    }
    console.log('first data admin : ', getAnnounces);
    return (
        <>
            <Topbar />
            <div className='admin-back-home'>
                <Link to="/">Home</Link>
            </div>
            <div className="add-announce">
                <button className='button-one add-announce-btn' onClick={handleNewAnnounce}>
                    Add an announce
                </button>
            </div>
            <div className={`Home ${bodytheme}`}>



                <Media query="(max-width: 780px)">
                    {matches => matches ? <SearchbarMobile /> : <SearchBar />}
                </Media>
                <AnnounceCards
                    datas={getAnnounces}
                    handleMore={handleMore}
                    handleSearch={handleSearch}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                    admin="true"
                    theme={theme} />
            </div>

        </>

    );
};
export default Home;
