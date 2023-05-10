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
            couleur: animalSexe,
            poids: animalWeight,
            adresseId: idAdress,
            utilisateurId: idUser,
            description: description,
            imageURL: imageURL,
        };
        try {
            const data = await CreateAnimal(newAnimal);
            setIdAnimal(data.insertId);
        } catch (error) {
            console.log('Error creating Animal:', error);
        }
    }
    const handleSubmitCreateAnnounce = async (idAdress, idUser, idAnimal) => {
        const newAnnounce = {
            utilisateurId: idUser,
            animalId: idAnimal,
            date_perte: new Date(),
            adresseId: idAdress,


        };
        try {
            await CreateAnnounce(newAnnounce);
            navigate("/admin");

        } catch (error) {
            console.log('Error creating Animal:', error);
        }

    }
    const handleSubmitCreate = async (e) => {
        e.preventDefault()
        try {
            const data = await handleSubmitCreateAnimal(idUser, idAdress);
            setIdAnimal(data.insertId);
            console.log("animal enregistré en bdd", data.insertId);
        } catch (error) {
            console.log(error);
        }
        try {
            handleSubmitCreateAnnounce(idUser, idAdress, idAnimal);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className={`New-single ${bodytheme}`}>
            <Topbar />
            <section className="new-single-body">
                <div className='back-home'>
                    <Link to="/admin">annuler</Link>
                </div>
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
                        placeholder='logo foot par défaut'
                        onChange={(event) => setAnimalAge(event.target.value)}
                    />
                    <label htmlFor="puce">puce</label>
                    <input
                        type="text"
                        id="animal-puce"
                        value={animalPuce}
                        placeholder='logo foot par défaut'
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
