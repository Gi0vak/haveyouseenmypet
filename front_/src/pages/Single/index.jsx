import './index.css';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetPet } from '../../API/api';
import { useNavigate } from 'react-router-dom';
import Moment from 'moment';
import { Link } from 'react-router-dom';
const Single = ({ theme, bodytheme, admin }) => {
    const navigate = useNavigate();
    const { petID } = useParams();
    // console.log((petID));
    const [getPet, setGetPet] = useState([]);
    //fonction qui recupere les données d'un pet correspondant au petID fournit par le useParams
    useEffect(() => {

        const singlePet = async () => {
            try {
                const data = await GetPet(petID);
                const theSingle = await data;
                setGetPet(theSingle)
                // console.log(theSingle);
            }
            catch (error) {
                console.log('Error : ', error);
            }
        }
        { getPet && singlePet() }
    }, [petID]);

    const TimeAgo = (timestamp) => {
        const timeAgo = Moment(timestamp).fromNow();
        return <>{timeAgo}</>;
    }
    const handleUpdate = (e, petID) => {
        e.preventDefault();
        navigate(`/updatepet/${petID}`);
    }
    const handleDelete = (e, petID) => {
        e.preventDefault();
        console.log(petID);
    }
    return (
        <>
            <Topbar />
            <div className={`Single ${bodytheme}`}>
                <div className='back-home'>
                    <Link to="/">retour</Link>
                </div>
                {getPet && (
                    <section className="single-body">
                        <div className={`single-header ${theme}`}>
                            <img src="" alt="photo pet" />
                            <div className="single-header-company">
                                <h1>{getPet.name}</h1>
                                <p></p>
                            </div>
                            <button className="button-two">
                                {getPet.name}
                            </button>
                        </div>
                        <article className={`single-article ${theme}`}>
                            <section className='single-article-apply'>
                                <div>
                                    <p>{TimeAgo()} . {getPet}</p>
                                    <div className="single-pos-loc">
                                        <h1>{getPet}</h1>
                                        <h3 className='single-location'>{getPet}</h3>
                                    </div>
                                </div>
                                <div className="single-btn-apply">
                                    <button className="button-one single-article-btn">Apply Now</button>
                                </div>
                            </section>


                            <div className='single-buttons'>
                                <button className='button-one' onClick={((e) => { handleUpdate(e, petID) })}>update</button>
                                <button className='button-two' onCliCk={((e) => { handleDelete(e, petID) })}>delete</button>
                            </div>
                        </article>

                    </section>
                )}

            </div >
            <Footer />
        </>
    )

};

export default Single;
