import './index.css';
import { Link } from 'react-router-dom';
import imgHero from '../../assets/pictures/imgHero.png';
import logo2 from '../../assets/pictures/logo2.svg';
import admin from '../../assets/pictures/admin.svg';
import sun from '../../assets/pictures/sun.svg';
import moon from '../../assets/pictures/moon.svg';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

const Navbar = () => {

    const { toggleTheme, theme } = useContext(ThemeContext);


    return (

        <>
            <header className={`topbar`} >

                <section className="space-between">
                    <Link className="logo" to="/">
                        <img src={logo2} alt="HYSMP? logo" className='topbar-logo' />
                    </Link>

                    <div className='center'>
                        <Link to="/admin" >
                            <img src={admin} alt="admin logo" className='admin-logo' />
                        </Link>
                        <div className='toggle-button'>
                            <img src={sun} alt="sun" className='sun' />
                            <label className="switch">
                                <input type="checkbox" onClick={toggleTheme} checked={theme === "dark" ? true : false} />
                                <span className="slider"></span>
                            </label>
                            <img src={moon} alt="moon" className='moon' />

                        </div>

                    </div >

                </section>
                <div className='buttons'>
                    <Link to="/" >
                        <button className='button-one'>J'ai trouvé un animal</button>
                    </Link>
                    <Link to="/newuser" >
                        <button className='button-two'>J'ai perdu un animal</button>
                    </Link>
                </div>
                <img src={imgHero} alt="HYSMP? hero" className='topbar-img' />

            </header >


            <section className='div-white'>

            </section>
        </>
    );
};

export default Navbar;
