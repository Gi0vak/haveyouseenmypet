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

            <section className={`topbar`} >
                <img src={imgHero} alt="HYSMP? hero" className='topbar-img' />

                <Link className="logo" to="/">
                    <img src={logo2} alt="HYSMP? logo" className='topbar-logo' />
                </Link>

                <div className='center'>
                    <img src={admin} alt="admin logo" className='admin-logo' />

                    <div className='toggle-button'>
                        <img src={sun} alt="sun" className='sun' />
                        <label className="switch">
                            <input type="checkbox" onClick={toggleTheme} checked={theme === "dark" ? true : false} />
                            <span className="slider"></span>
                        </label>
                        <img src={moon} alt="moon" className='moon' />

                    </div>
                </div>

            </section >
        </>
    );
};
export default Navbar;
