import './index.css';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetAnnounce } from '../../API/api';
import { useNavigate } from 'react-router-dom';
import Moment from 'moment';
import { Link } from 'react-router-dom';
const Single = ({ theme, bodytheme, admin }) => {
    const navigate = useNavigate();
    const { announceID } = useParams();
    console.log(parseInt(announceID));
    const [getAnnounce, setGetAnnounce] = useState([]);
    //fonction qui recupere les données d'un pet correspondant au petID fournit par le useParams
    useEffect(() => {

        const singleAnnounce = async () => {
            try {
                const data = await GetAnnounce(announceID);
                const theSingle = await data;
                setGetAnnounce(theSingle)
                console.log(theSingle);
            }
            catch (error) {
                console.log('Error : ', error);
            }
        }
        { getAnnounce && singleAnnounce() }
    }, [announceID]);

    const TimeAgo = (timestamp) => {
        const timeAgo = Moment(timestamp).fromNow();
        return <>{timeAgo}</>;
    }
    const handleUpdate = (e, announceID) => {
        e.preventDefault();
        navigate(`/updateannounce/${announceID}`);
    }
    const handleDelete = (e, announceID) => {
        e.preventDefault();
        console.log(announceID);;
    }
    return (
        <>
            <Topbar />
            <div className={`Single ${bodytheme}`}>
                <div className='back-home'>
                    <Link to="/">retour</Link>
                </div>
                {getAnnounce && (
                    <section className="single-body">
                        <div className={`single-header ${theme}`}>
                            <img src={getAnnounce.name} alt="photo announce" />
                            <div className="single-header-company">
                                <h1>{getAnnounce.name}</h1>
                                <p>{getAnnounce.name}</p>
                            </div>
                            <button className="button-two">
                                Company Site
                            </button>
                        </div>
                        <article className={`single-article ${theme}`}>
                            <section className='single-article-apply'>
                                <div>
                                    <p>{TimeAgo(getAnnounce.name)} . {getAnnounce.name}</p>
                                    <div className="single-pos-loc">
                                        <h1>{getAnnounce.name}</h1>
                                        <h3 className='single-location'>{getAnnounce.name}</h3>
                                    </div>
                                </div>
                                <div className="single-btn-apply">
                                    <button className="button-one single-article-btn">Apply Now</button>
                                </div>
                            </section>
                            <p>{getAnnounce.description}</p>
                            <h1>Requirements</h1>
                            <p>{getAnnounce}</p>

                            <h1>What You Will Do</h1>
                            <p>{getAnnounce}</p>

                            <div className='single-buttons'>
                                <button className='button-one' onClick={((e) => { handleUpdate(e, announceID) })}>update</button>
                                <button className='button-two' onCliCk={((e) => { handleDelete(e, announceID) })}>delete</button>
                            </div>
                        </article>

                    </section>
                )}

            </div>
            <Footer />
        </>
    )

};

export default Single;
