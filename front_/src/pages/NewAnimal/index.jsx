import './index.css';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { CreateAnimal } from '../../API/api.js';
import { CreateAnnounce } from '../../API/api.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { IdContext } from '../../context/IdContext';
import ScrollToTop from '../../components/ScrollToTop';
const NewAnimal = ({ theme, bodytheme }) => {
    const navigate = useNavigate();
    const [animalName, setAnimalName] = useState("");
    const [animalRace, setAnimalRace] = useState("");
    const [animalAge, setAnimalAge] = useState("");
    const [animalPuce, setAnimalPuce] = useState("");
    const [animalSexe, setAnimalSexe] = useState("");
    const [animalColor, setAnimalColor] = useState("");
    const [animalWeight, setAnimalWeight] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [success, setSuccess] = useState(false);
    const { idUser } = useContext(IdContext);
    const { idAdress } = useContext(IdContext);
    const { idAnimal, setIdAnimal } = useContext(IdContext);



    console.log("idUser :", idUser);
    const handleSubmitCreateAnimal = async (idUser, idAdress) => {

        const newAnimal = {
            name: animalName,
            race: animalRace,
            age: animalAge,
            puce: animalPuce,
            sexe: animalSexe,
            couleur: animalColor,
            poids: animalWeight,
            adresseId: idAdress,
            utilisateurId: idUser,
            description: description,
            imageURL: imageURL,
        };
        try {
            const data = await CreateAnimal(newAnimal);
            const idAnimal = await data.insertId;
            setIdAnimal(idAnimal);
        } catch (error) {
            console.log('Error creating Animal:', error);
        }
    }
    const handleSubmitCreateAnnounce = async (idAdress, idUser, idAnimal) => {
        const date = new Date();;
        const sqlDateTime = date.toISOString().slice(0, 19).replace('T', ' ');
        const newAnnounce = {
            utilisateurId: idUser,
            animalId: idAnimal,
            date_perte: sqlDateTime,
            adresseId: idAdress,
        };
        try {
            const data = await CreateAnnounce(newAnnounce);
            console.log(data);
            navigate("/admin");

        } catch (error) {
            console.log('Error creating Animal:', error);
        }
    }
    const handleSubmitCreate = (e) => {
        e.preventDefault()

        handleSubmitCreateAnimal(idUser, idAdress);

        console.log("animal enregistré en bdd", idAnimal);

        if (idAnimal) {
            handleSubmitCreateAnnounce(idAdress, idUser, idAnimal)
            navigate("/admin");
        }
    };

    return (
        <section className={`New-single ${bodytheme}`}>

            <ScrollToTop />
            <Topbar />
            <section className="new-single-body">
                <Link to="/admin"><div className='back-home'>
                    annuler
                </div>
                </Link>
                <form className={`new-single-form ${theme}`} onSubmit={handleSubmitCreate}>
                    <h2>Animal</h2>

                    <label htmlFor="animal-Name">Animal name</label>
                    <input
                        type="text"
                        id="animal-Name"
                        value={animalName}
                        onChange={(event) => setAnimalName(event.target.value)}
                    />

                    <label htmlFor="Race-name">Race</label>
                    <input
                        type="text"
                        id="animal-race"
                        value={animalRace}
                        onChange={(event) => setAnimalRace(event.target.value)}
                    />

                    <label htmlFor="logo">age</label>
                    <input
                        type="text"
                        id="animal-age"
                        value={animalAge}
                        onChange={(event) => setAnimalAge(event.target.value)}
                    />
                    <label htmlFor="puce">puce</label>
                    <input
                        type="text"
                        id="animal-puce"
                        value={animalPuce}
                        onChange={(event) => setAnimalPuce(event.target.value)}
                    />

                    <label htmlFor="sexe">sexe</label>
                    <input
                        type="text"
                        id="animal-sexe"
                        value={animalSexe}
                        onChange={(event) => setAnimalSexe(event.target.value)}
                    />
                    <label htmlFor="weight">Poids</label>
                    <input
                        type="text"
                        id="animal-weight"
                        value={animalWeight}
                        onChange={(event) => setAnimalWeight(event.target.value)}
                    />
                    <label htmlFor="color">color</label>
                    <input
                        type="text"
                        id="animal-color"
                        value={animalColor}
                        onChange={(event) => setAnimalColor(event.target.value)}
                    />
                    <label htmlFor="animal-description">description</label>
                    <textarea
                        id="animal-description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    ></textarea>
                    <label htmlFor="poids">photo</label>
                    <input
                        type="text"
                        id="animal-poids"
                        value={imageURL}
                        onChange={(event) => setImageURL(event.target.value)}
                    />
                    <button className="button-one" type="submit">Add announce</button>
                </form>
                {success && <p className="success">Announce added successfully</p>}
            </section>
            <Footer />
        </section>
    );
};


export default NewAnimal;
