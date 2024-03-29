import './index.css';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { CreateUser } from '../../API/api.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { IdContext } from '../../context/IdContext';

const NewUser = ({ theme, bodytheme }) => {
    const navigate = useNavigate();
    const [userFirstname, setUserFirstName] = useState("");
    const [userSurname, setUserSurname] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
    const [success, setSuccess] = useState(false);
    const { idUser, setIdUser } = useContext(IdContext);

    const handleSubmitCreate = async (e) => {
        e.preventDefault()
        const newuser = {
            nom: userSurname,
            prenom: userFirstname,
            telephone: userPhone,
            mail: userMail,
            password: userPassword
        };
        try {
            const userData = await CreateUser(newuser);
            const user = await userData.insertId;
            console.log("idUser :", user);
            if (user) {
                setIdUser(user);
                navigate("/newadress");
            }

        } catch (error) {
            console.log('Error creating user:', error);
            if (!idUser) {
                alert('mauvais utilisateur !')
            }

        };
    }

    return (
        <>
            <Topbar />
            <section className={`New-single ${bodytheme}`}>
                <section className="new-single-body">
                    <Link to="/admin">
                        <div className='back-home'>
                            annuler
                        </div>
                    </Link>
                    <form className={`new-single-form ${theme}`} onSubmit={handleSubmitCreate}>
                        <h2>Utilisateur</h2>

                        <label htmlFor="user-name">nom</label>
                        <input
                            type="text"
                            id="user-surname"
                            value={userSurname}
                            onChange={(event) => setUserSurname(event.target.value)}
                        />

                        <label htmlFor="user-firstname">Prénom</label>
                        <input
                            type="text"
                            id="user-firstname"
                            value={userFirstname}
                            onChange={(event) => setUserFirstName(event.target.value)}
                        />

                        <label htmlFor="phone">Telephone</label>
                        <input
                            type="text"
                            id="user-phone"
                            value={userPhone}
                            onChange={(event) => setUserPhone(event.target.value)}
                        />

                        <label htmlFor="mail">mail</label>
                        <input
                            type="text"
                            id="user-mail"
                            value={userMail}
                            onChange={(event) => setUserMail(event.target.value)}
                        />
                        <label htmlFor="password">password</label>
                        <input
                            type="password"
                            id="user-password"
                            value={userPassword}
                            onChange={(event) => setUserPassword(event.target.value)}
                        />
                        <label htmlFor="password confirm">password confirm</label>
                        <input
                            type="password"
                            id="user-password-confirm"
                            value={userPasswordConfirm}
                            onChange={(event) => setUserPasswordConfirm(event.target.value)}
                        />
                        <button className="button-one" type="submit">Add user</button>
                    </form>
                    {success && <p className="success">Announce added successfully</p>}
                </section>
                <Footer />
            </section>
        </>
    );
};


export default NewUser;
