import './index.css';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { CreateAdress } from '../../API/api.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { IdContext } from '../../context/IdContext';
import ScrollToTop from '../../components/ScrollToTop';

const NewAdress = ({ theme, bodytheme }) => {
    const navigate = useNavigate();
    const [adressFirst, setAdressFirst] = useState("");
    const [adressSecond, setAdressSecond] = useState("");
    const [town, setTown] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const { idAdress, setIdAdress } = useContext(IdContext);

    const [success, setSuccess] = useState(false);

    const handleSubmitCreate = async (e) => {
        e.preventDefault()
        const newAdress = {
            adresse_premiere_ligne: adressFirst,
            adresse_seconde_ligne: adressSecond,
            ville: town,
            code_postal: postalCode,
        };
        try {
            const data = await CreateAdress(newAdress)
            const adress = await data.insertId;
            console.log("adressId :", adress);
            if (adress) {
                setIdAdress(adress);
                navigate("/newanimal");
            }

        } catch (error) {
            console.log('Error creating Animal:', error);
        }

    };


    return (
        <section className={`New-single ${bodytheme}`}>
            <ScrollToTop />
            <Topbar />
            <section className="new-single-body">
                <Link to="/admin">
                    <div className='back-home'>
                        annuler
                    </div>
                </Link>
                <form className={`new-single-form ${theme}`} onSubmit={handleSubmitCreate}>
                    <h2>Adresse</h2>

                    <label htmlFor="adress-first">Adresse première ligne</label>
                    <input
                        type="text"
                        id="adress-first"
                        value={adressFirst}
                        onChange={(event) => setAdressFirst(event.target.value)}
                    />

                    <label htmlFor="Race-name">Adresse seconde ligne</label>
                    <input
                        type="text"
                        id="animal-race"
                        value={adressSecond}
                        onChange={(event) => setAdressSecond(event.target.value)}
                    />

                    <label htmlFor="logo">Ville</label>
                    <input
                        type="text"
                        id="town"
                        value={town}
                        onChange={(event) => setTown(event.target.value)}
                    />

                    <label htmlFor="sexe">Code postal</label>
                    <input
                        type="text"
                        id="postal-code"
                        value={postalCode}
                        onChange={(event) => setPostalCode(event.target.value)}
                    />

                    <button className="button-one" type="submit">Add adress</button>
                </form>
                {success && <p className="success">Adress added successfully</p>}
            </section>
            <Footer />
        </section>
    );
};


export default NewAdress;
