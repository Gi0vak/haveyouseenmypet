import './index.css';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import { DeletePet } from '../../../API/api.js';


const PetCard = ({
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
        const timeAgo = Moment(date).fromNow();
        return <>{timeAgo}</>;
    }

    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            const pet = await DeletePet(id)
            window.location.reload();
            console.log('the pet this id is deleted', pet);
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
                        className="card-pet-logo"
                        alt="logo pet" />
                    )}

                <h3 className="card-pet-contract-postedAT">
                    {TimeAgo(postedAt)}
                    <span className='dot'> • </span>
                    {contract}
                </h3 >
                <Link className="card-link" admin={admin} to={`/pets/${id}`}>
                    <h1 className="card-pet-position">{name}</h1>
                </Link>
                <h3 className='card-pet-company'>{company}</h3>
                <h3 className='card-pet-location'>{location}</h3>

            </article >
            {admin === "true" &&
                <div className='delete-update'>
                    <Link to={`/updatepet/${id}`} >
                        <img src='https://i.postimg.cc/Qx37sJMg/update.png' alt="update pet" className='update' />
                    </Link>
                    <img src="https://i.postimg.cc/25wvXbYd/delete.png" alt="trash pet" className='delete' onClick={(e) => {

                        handleDelete(e, id)
                    }} />

                </div>}
        </section>
    );
};
export default PetCard;
