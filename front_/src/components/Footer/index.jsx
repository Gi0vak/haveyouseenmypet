import './index.css';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { Link } from 'react-router-dom';
const Footer = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            <section className={`Footer ${theme}`}>

                <div className='footer-left'>


                    <Link className="logoFooter" to="/">
                        <img alt="HYSMP? logo" className='topbar-logo' />
                    </Link>

                </div>
                <div className='footer-right'>
                    <button className='button-one footer-btn'>Apply Now</button>
                </div>
                <div className="sectionLiens">
                    <div className="liens">
                        <a href="#1">Mentions légales</a>  | <a href="#1">Politique de confidentialité</a>  | <a href="#1">Condition Générale d'Utilisation</a>
                    </div>

                </div>
            </section>
        </>
    )
};
export default Footer;