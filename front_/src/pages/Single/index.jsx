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
                // console.log(announceID);
                const theSingle = await data;

                setGetAnnounce(theSingle[0])


            }
            catch (error) {
                console.log('Error : ', error);
            }
        }
        singleAnnounce()

    }, [announceID]);
    console.log(getAnnounce);

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
    console.log("infos annonce ", getAnnounce);
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
                            <img className="single-img" src={getAnnounce.imageURL} alt="photo announce" />
                            <div className="single-header-company">
                                <h1>nom animal : {getAnnounce.name}</h1>

                            </div>
                            {/* <button className="button-two">
                                Company Site
                            </button> */}

                        </div>
                        <article className={`single-article ${theme}`}>
                            <section className='single-article-apply'>
                                <div>

                                    <p>{TimeAgo(getAnnounce.date_perte)} </p>
                                    <div className="single-pos-loc">
                                        <h1>couleur : {getAnnounce.couleur}</h1>
                                        <h1>sexe : {getAnnounce.sexe}</h1>
                                        <h1>race : {getAnnounce.race}</h1>
                                        <h1>age : {getAnnounce.age}</h1>
                                        <h1>puce : {getAnnounce.puce}</h1>
                                        <h1>code postal : {getAnnounce.code_postal}</h1>
                                        <h1>nom proprietaire : {getAnnounce.nom}</h1>
                                        <h1>prenom proprietaire : {getAnnounce.prenom}</h1>
                                        <p>description: {getAnnounce.description}</p>
                                        <h1>ligne 1 adresse : {getAnnounce.adresse_premiere_ligne}</h1>
                                        <h1>ville : {getAnnounce.ville}</h1>
                                        <h1>mail : {getAnnounce.mail}</h1>


                                    </div>
                                </div>
                                <div className="single-btn-apply">
                                    {/* <button className="button-one single-article-btn">Apply Now</button> */}
                                </div>
                            </section>


                            <div className='single-buttons'>
                                <button className='button-one' onClick={((e) => { handleUpdate(e, announceID) })}>update</button>
                                <button className='button-two' onCliCk={((e) => { handleDelete(e, announceID) })}>delete</button>
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
