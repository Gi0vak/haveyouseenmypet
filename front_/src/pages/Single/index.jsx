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
    console.log(parseInt(petID));
    const [getPet, setGetPet] = useState([]);
    //fonction qui recupere les données d'un pet correspondant au petID fournit par le useParams
    useEffect(() => {

        const singlePet = async () => {
            try {
                const data = await GetPet(petID);
                const theSingle = await data;
                setGetPet(theSingle)
                console.log(theSingle);
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
        console.log(petID);;
    }
    return (
        <>
            <Topbar />
            <div className={`Single ${bodytheme}`}>
                <div className='back-home'>
                    <Link to="/">retour</Link>
                </div>
                {getPet.role && (
                    <section className="single-body">
                        <div className={`single-header ${theme}`}>
                            <img src={getPet.photo} alt="photo pet" />
                            <div className="single-header-company">
                                <h1>{getPet.company}</h1>
                                <p>{getPet.website}</p>
                            </div>
                            <button className="button-two">
                                Company Site
                            </button>
                        </div>
                        <article className={`single-article ${theme}`}>
                            <section className='single-article-apply'>
                                <div>
                                    <p>{TimeAgo(getPet.postedAt)} . {getPet.contract}</p>
                                    <div className="single-pos-loc">
                                        <h1>{getPet.position}</h1>
                                        <h3 className='single-location'>{getPet.location}</h3>
                                    </div>
                                </div>
                                <div className="single-btn-apply">
                                    <button className="button-one single-article-btn">Apply Now</button>
                                </div>
                            </section>
                            <p>{getPet.description}</p>
                            <h1>Requirements</h1>
                            <p>{getPet.requirements.content}</p>
                            <ul>{getPet.requirements.items.map(el => <li><p>{el}</p></li>)}</ul>
                            <h1>What You Will Do</h1>
                            <p>{getPet.role.content}</p>
                            <ol>
                                {getPet.role.items.map(el => <li><p>{el}</p></li>)}
                            </ol>
                            <div className='single-buttons'>
                                <button className='button-one' onClick={((e) => { handleUpdate(e, petID) })}>update</button>
                                <button className='button-two' onCliCk={((e) => { handleDelete(e, petID) })}>delete</button>
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
