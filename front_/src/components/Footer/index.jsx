import './index.css';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/pictures/logo2.svg';
import logoFacebook from '../../assets/pictures/facebook.svg';
import logoInstagram from '../../assets/pictures/instagram.svg';
import logoTwitter from '../../assets/pictures/twitter.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
const Footer = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            <section className={`Footer ${theme}`}>
                <div className='footer-left'>
                    <Link className="logo" to="/">
                        <img src={logo2} alt="HYSMP? logo" className='topbar-logo' />
                    </Link>
                </div>
                <div className='social-icons'>
                    <Link className="facebook" to="#">
                        <img src={logoFacebook} alt="facebook Logo" className='facebookLogo' />
                    </Link>
                    <Link className="instagram" to="#">
                        <img src={logoInstagram} alt="instragram Logo" className='instagramLogo' />
                    </Link>
                    <Link className="twitter" to="#">
                        <img src={logoTwitter} alt="twitter Logo" className='twitterLogo' />
                    </Link>

                </div>
            </section>
        </>
    )
};
export default Footer;