import './index.css';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UpdatePet } from '../../API/api.js';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NewSingle = ({ theme, bodytheme }) => {
    const navigate = useNavigate();
    const { petID } = useParams();

    const [petName, setPetName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [logo, setLogo] = useState("");
    const [logoBackground, setLogoBackground] = useState("");
    const [contract, setContract] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    const [apply, setApply] = useState("");
    const [success, setSuccess] = useState(false);
    const [content, setContent] = useState("");
    const [content2, setContent2] = useState("");
    const [items, setItems] = useState([]);
    const [items2, setItems2] = useState([]);

    // Fonction pour l'update
    const handleSubmitUpdate = async (event) => {
        event.preventDefault();
        const newPet = {
            position: petName,
            company: companyName,
            logoBackground: logoBackground,
            contract: contract,
            location: location,
            website: website,
            apply: apply,
            description: petDescription,
            requirements: {
                content: content,
                items: items
            },
            role: {
                content: content2,
                items: items2
            }
        };
        try {
            const update = await UpdatePet(newPet, petID);
            console.log(update)
            setSuccess(true);
            navigate("/admin");

        } catch (error) {
            console.log('Error creating pet:', error);
        }

    };

    return (
        <section className={`New-single ${bodytheme}`}>
            <Topbar />
            <section className="new-single-body">

                <div className='back-home'>
                    <Link to="/admin">annuler</Link>
                </div>
                <form className={`new-single-form ${theme}`} onSubmit={handleSubmitUpdate}>
                    <label htmlFor="pet-name">Pet name</label>
                    <input
                        type="text"
                        id="pet-title"
                        value={petName}
                        onChange={(event) => setPetName(event.target.value)}
                    />

                    <label htmlFor="company-name">Company Name</label>
                    <input
                        type="text"
                        id="company-name"
                        value={companyName}
                        onChange={(event) => setCompanyName(event.target.value)}
                    />

                    <label htmlFor="logo">Logo</label>
                    <input
                        type="text"
                        id="logo"
                        value={logo}
                        placeholder='logo foot par défaut'
                        onChange={(event) => setLogo(event.target.value)}
                    />

                    <label htmlFor="logo-background">Color Background</label>
                    <input
                        type="text"
                        id="logo-background"
                        value={logoBackground}
                        onChange={(event) => setLogoBackground(event.target.value)}
                    />
                    <label htmlFor="contract">contract</label>
                    <input
                        type="text"
                        id="contract"
                        value={contract}
                        onChange={(event) => setContract(event.target.value)}
                    />

                    <label htmlFor="location">Location</label>
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
                    <label htmlFor="pet-description">Pet Description</label>
                    <textarea
                        id="pet-description"
                        value={petDescription}
                        onChange={(event) => setPetDescription(event.target.value)}
                    ></textarea>
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
                    />
                    <button className="button-one" type="submit">Update Pet</button>
                </form>
                {success && <p className="success">Pet updated successfully</p>}
            </section>
            <Footer />
        </section>
    );
};


export default NewSingle;
