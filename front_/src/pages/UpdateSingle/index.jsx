import './index.css';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UpdateAnnounce } from '../../API/api.js';
import { GetAnnounce } from '../../API/api.js';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NewSingle = ({ theme, bodytheme }) => {
    const navigate = useNavigate();
    const { announceID } = useParams();
    const [getAnnounce, setGetAnnounce] = useState([]);
    const [telephone, setTelephone] = useState(getAnnounce.telephone);
    const [mail, setMail] = useState(getAnnounce.mail);
    const [nameAnimal, setNameAnimal] = useState(getAnnounce.name);
    const [race, setRace] = useState(getAnnounce.race);
    const [age, setAge] = useState(getAnnounce.age);
    const [puce, setPuce] = useState(getAnnounce.puce);
    const [sexe, setsexe] = useState(getAnnounce.sexe);
    const [couleur, setcouleur] = useState(getAnnounce.couleur);
    const [poids, setpoids] = useState(getAnnounce.poids);
    const [description, setdescription] = useState(getAnnounce.description);
    const [imageURL, setimageURL] = useState(getAnnounce.imageURL);
    const [adresse_premiere_ligne, setadresse_premiere_ligne] = useState(getAnnounce.adresse_premiere_ligne);
    const [adresse_seconde_ligne, setadresse_seconde_ligne] = useState(getAnnounce.adresse_seconde_ligne);
    const [ville, setville] = useState(getAnnounce.ville);
    const [code_postal, setcode_postal] = useState(getAnnounce.telephonecode_postal);
    const [success, setSuccess] = useState(false);
    useEffect(() => {

        const singleAnnounce = async () => {
            try {
                const data = await GetAnnounce(announceID);
                // console.log(announceID);
                const theSingle = await data;
                setGetAnnounce(theSingle[0])
                setTelephone(theSingle[0].telephone)
                setMail(theSingle[0].mail)
                setNameAnimal(theSingle[0].name)
                setRace(theSingle[0].race)
                setAge(theSingle[0].age)
                setPuce(theSingle[0].puce)
                setsexe(theSingle[0].sexe)
                setcouleur(theSingle[0].couleur)
                setpoids(theSingle[0].poids)
                setdescription(theSingle[0].description)
                setimageURL(theSingle[0].imageURL)
                setadresse_premiere_ligne(theSingle[0].adresse_premiere_ligne)
                setadresse_seconde_ligne(theSingle[0].adresse_seconde_ligne)
                setville(theSingle[0].ville)
                setcode_postal(theSingle[0].code_postal)
            }
            catch (error) {
                console.log('Error : ', error);
            }
        }
        { getAnnounce && singleAnnounce() }

    }, [announceID]);
    console.log("infos annonce ", getAnnounce);


    // Fonction pour l'update
    const handleSubmitUpdate = async (event) => {
        event.preventDefault();
        const newannounce = {
            telephone: telephone,
            mail: mail,
            name: nameAnimal,
            race: race,
            age: age,
            puce: puce,
            sexe: sexe,
            couleur: couleur,
            poids: poids,
            description: description,
            imageURL: imageURL,
            adresse_premiere_ligne: adresse_premiere_ligne,
            adresse_seconde_ligne: adresse_seconde_ligne,
            ville: ville,
            code_postal: code_postal
        }
        try {
            const update = await UpdateAnnounce(newannounce, announceID);
            console.log(update)
            setSuccess(true);
            setTimeout(() => {
                navigate("/admin");

            }, 2000);

        } catch (error) {
            console.log('Error creating announce:', error);
        }
    }

    return (
        <section className={`New-single`}>
            <Topbar />
            <section className={`new-single-body ${bodytheme}`}>

                <div className='back-home'>
                    <Link to="/admin">annuler</Link>
                </div>
                <form className={`new-single-form ${theme}`} onSubmit={handleSubmitUpdate}>
                    <label htmlFor="announce-name">telephone</label>
                    <input
                        type="text"
                        id="announce-title"
                        value={telephone}
                        onChange={(event) => setTelephone(event.target.value)}
                    />
                    <label htmlFor="announce-name">mail</label>
                    <input
                        type="text"
                        id="announce-title"
                        value={mail}
                        onChange={(event) => setMail(event.target.value)}
                    />

                    <label htmlFor="company-name">nameAnimal</label>
                    <input
                        type="text"
                        id="company-name"
                        value={nameAnimal}
                        onChange={(event) => setNameAnimal(event.target.value)}
                    />

                    <label htmlFor="logo">race</label>
                    <input
                        type="text"
                        id="logo"
                        value={race}
                        placeholder='logo foot par défaut'
                        onChange={(event) => setRace(event.target.value)}
                    />

                    <label htmlFor="logo-background">age</label>
                    <input
                        type="text"
                        id="logo-background"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                    <label htmlFor="contract">puce</label>
                    <input
                        type="text"
                        id="contract"
                        value={puce}
                        onChange={(event) => setPuce(event.target.value)}
                    />

                    <label htmlFor="location">sexe</label>
                    <input
                        type="text"
                        id="location"
                        value={sexe}
                        onChange={(event) => setsexe(event.target.value)}
                    />

                    <label htmlFor="website">couleur</label>
                    <input
                        type="text"
                        id="website"
                        value={couleur}
                        onChange={(event) => setcouleur(event.target.value)}
                    />

                    <label htmlFor="apply">poids</label>
                    <input
                        type="text"
                        id="apply"
                        value={poids}
                        onChange={(event) => setpoids(event.target.value)}
                    />
                    <label htmlFor="announce-description">description</label>
                    <textarea
                        id="announce-description"
                        value={description}
                        onChange={(event) => setdescription(event.target.value)}
                    ></textarea>
                    <label htmlFor="content">imageURL</label>
                    <input
                        type="text"
                        id="content"
                        value={imageURL}
                        onChange={(event) => setimageURL(event.target.value)}
                    />
                    <label htmlFor="items">adresse_premiere_ligne</label>
                    <input
                        type="text"
                        id="items"
                        value={adresse_premiere_ligne}
                        onChange={(event) => setadresse_premiere_ligne(event.target.value)}
                    />
                    <label htmlFor="content2">adresse_seconde_ligne</label>
                    <input
                        type="text"
                        id="content2"
                        value={adresse_seconde_ligne}
                        onChange={(event) => setadresse_seconde_ligne(event.target.value)}
                    />
                    <label htmlFor="items2">ville</label>
                    <input
                        type="text"
                        id="items2"
                        value={ville}
                        onChange={(event) => setville(event.target.value)}
                    />
                    <label htmlFor="items2">code_postal</label>
                    <input
                        type="text"
                        id="items2"
                        value={code_postal}
                        onChange={(event) => setcode_postal(event.target.value)}
                    />
                    <button className="button-one" type="submit"> announce</button>
                </form>
                {success && <p className="success">announce updated successfully</p>}
            </section>
            <Footer />
        </section>
    );

}

export default NewSingle;
