import './index.css';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import 'moment/locale/fr';
import { DeleteAnnounce } from '../../../API/api.js';


const AnnounceCard = ({
    logo,
    name,
    postedAt,
    contract,
    company,
    location,
    admin,
    theme,
    id }) => {


    const TimeAgo = (date) => {
        const timeAgo = Moment(date).locale('fr').fromNow();
        return <>{timeAgo}</>;
    }

    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            const announce = await DeleteAnnounce(id)
            window.location.reload();
            console.log('the announce this id is deleted', announce);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="card-grid">
            <article className={`card ${theme}`}>
                {logo &&
                    (<img
                        src={logo}
                        className="card-announce-logo"
                        alt="logo announce" />
                    )}

                <h3 className="card-announce-contract-postedAT">
                    {TimeAgo(postedAt)}

                </h3 >
                <Link className="card-link" admin={admin} to={`/announces/${id}`}>
                    <h1 className="card-announce-position">{name}</h1>
                </Link>
                <h3 className='card-announce-company'>{company}</h3>
                <h3 className='card-announce-location'>{location}</h3>

            </article >
            {admin === "true" &&
                <div className='delete-update'>
                    <Link to={`/updateannounce/${id}`} >
                        <img src='https://i.postimg.cc/Qx37sJMg/update.png' alt="update announce" className='update' />
                    </Link>
                    <img src="https://i.postimg.cc/25wvXbYd/delete.png" alt="trash announce" className='delete' onClick={(e) => {

                        handleDelete(e, id)
                    }} />

                </div>}
        </section>
    );
};
export default AnnounceCard;
