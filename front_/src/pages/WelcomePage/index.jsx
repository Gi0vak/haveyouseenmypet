import './index.css';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const WelcomePage = ({ theme, bodytheme, admin }) => {
    const navigate = useNavigate();

    return (
        <>
            <Topbar />
            <div className={`Single ${bodytheme}`}>
                welcome
            </div>
            <button onClick={() => navigate('/')}>Home</button>
            <Footer />
        </>
    )

};

export default WelcomePage;
