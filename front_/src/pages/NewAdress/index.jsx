import './index.css';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { CreateAnimal } from '../../API/api.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NewAdress = ({ theme, bodytheme }) => {
    const navigate = useNavigate();
    const [animalName, setAnimalName] = useState("");
    const [animalRace, setAnimalRace] = useState("");
    const [animalAge, setAnimalAge] = useState("");
    const [animalSexe, setAnimalSexe] = useState("");
    const [animalPoids, setAnimalPoids] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmitCreate = async (e) => {
        e.preventDefault()
        const newAnimal = {
            name: animalName,
            race: animalRace,
            age: animalAge,
            puce: 1,
            sexe: animalSexe,
            couleur: animalSexe,
            poids: animalPoids,
            adresseId: 1,
            utilisateurId: 1,
            description: description,
            imageURL: imageURL,
        };
        try {
            await CreateAnimal(newAnimal);
            navigate("/admin");

        } catch (error) {
            console.log('Error creating Animal:', error);
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

                    <label htmlFor="sexe">sexe</label>
                    <input
                        type="text"
                        id="animal-sexe"
                        value={animalSexe}
                        onChange={(event) => setAnimalSexe(event.target.value)}
                    />
                    <label htmlFor="poids">poids</label>
                    <input
                        type="text"
                        id="animal-poids"
                        value={animalPoids}
                        onChange={(event) => setAnimalPoids(event.target.value)}
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
                    {/* <h2>User</h2>
                    <label htmlFor="location"></label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                    />

                    <label htmlFor="website">Website</label>
                    <input
                        type="text"
                        id="website"
                        value={website}
                        onChange={(event) => setWebsite(event.target.value)}
                    />

                    <label htmlFor="apply">Apply</label>
                    <input
                        type="text"
                        id="apply"
                        value={apply}
                        onChange={(event) => setApply(event.target.value)}
                    />

                    <label htmlFor="content">content</label>
                    <input
                        type="text"
                        id="content"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />
                    <label htmlFor="items">items</label>
                    <input
                        type="text"
                        id="items"
                        value={items}
                        onChange={(event) => setItems(event.target.value)}
                    />
                    <label htmlFor="content2">content2</label>
                    <input
                        type="text"
                        id="content2"
                        value={content2}
                        onChange={(event) => setContent2(event.target.value)}
                    />
                    <label htmlFor="items2">items2</label>
                    <input
                        type="text"
                        id="items2"
                        value={items2}
                        onChange={(event) => setItems2(event.target.value)}
                    /> */}

                    <button className="button-one" type="submit">Add announce</button>
                </form>
                {success && <p className="success">Announce added successfully</p>}
            </section>
            <Footer />
        </section>
    );
};


export default NewAdress;
