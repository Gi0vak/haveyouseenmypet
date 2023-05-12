import './index.css';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import 'moment/locale/fr';
import { DeleteAnnounce } from '../../../API/api.js';


const AnnounceCard = ({
    logo,
    name,
    sexe,
    race,
    color,
    postedAt,
    handleDelete,
    postalCode,
    town,
    admin,
    theme,
    id }) => {


    const TimeAgo = (date) => {
        const timeAgo = Moment(date).locale('fr').fromNow();
        return <>{timeAgo}</>;
    }



    return (
        <section className="card-grid">
            <Link className="card-link" admin={admin} to={`/announces/${id}`}>
                <article className={`card ${theme}`}>
                    <div className="card-announce-logo">
                        {logo &&
                            (<img
                                src={logo}
                                alt="logo announce" />
                            )}
                    </div>
                    <div className="location-date">
                        <h3 className='card-announce-location'>
                            {town} {postalCode && (`(${postalCode})`)}
                        </h3>
                        <h3 className="card-announce-date">
                            {TimeAgo(postedAt)}
                        </h3 >

                    </div>
                    <div className="card-announce-desc">
                        <h1 >{name}</h1>
                        <h2 >sexe</h2>
                        <h3 >{sexe}</h3>
                        <h2 >race</h2>
                        <h3 >{race}</h3>
                        <h2>color</h2>
                        <h3>{color}</h3>
                    </div>




                </article >
            </Link>
            {admin === "true" &&
                <div className='delete-update'>
                    <Link to={`/updateannounce/${id}`} >
                        <img src='https://i.postimg.cc/Qx37sJMg/update.png' alt="update announce" className='update' />
                    </Link>
                    <img src="https://i.postimg.cc/25wvXbYd/delete.png" alt="trash announce" className='delete' onClick={((e) => { handleDelete(e, id) })} />

                </div>}
        </section>
    );
};
export default AnnounceCard;
