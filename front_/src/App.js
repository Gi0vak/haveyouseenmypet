import './App.css';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Home from './pages/Home';
import Single from './pages/Single';
import NewUser from './pages/NewUser';
import NewAnimal from './pages/NewAnimal';
import NewAdress from './pages/NewAdress';
import UpdateSingle from './pages/UpdateSingle';
import Page404 from './pages/Page404';
import HomeAdmin from './pages/HomeAdmin';
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { IdContext } from './context/IdContext';

function App() {
    // déclarations des etats du context
    const [theme, setTheme] = useState('light');
    const [bodyTheme, setBodyTheme] = useState('body-light');
    const [idUser, setIdUser] = useState('');
    const [idAnimal, setIdAnimal] = useState('');
    const [idAdress, setIdAdress] = useState('');
    // fonction pour changer le thème
    const toggleTheme = () => {
        console.log('click');
        setTheme(theme === 'light' ? 'dark' : 'light');
        setBodyTheme(bodyTheme === 'body-light' ? 'body-dark' : 'body-light');
    };
    return (
        //les différentes routes vers les pages
        <div className="App">
            {/* // theme distibué par le context */}
            <IdContext.Provider value={{ idUser, setIdUser, idAnimal, setIdAnimal, idAdress, setIdAdress }}>

                <ThemeContext.Provider
                    value={{ theme, setTheme, bodyTheme, setBodyTheme, toggleTheme }}>

                    <Routes>
                        <Route
                            path="/welcome"
                            element={<WelcomePage theme={theme} bodytheme={bodyTheme} />} />
                        <Route
                            path="/"
                            element={<Home theme={theme} bodytheme={bodyTheme} />} />
                        <Route
                            path="/admin"
                            element={<HomeAdmin theme={theme} bodytheme={bodyTheme} />} />
                        <Route
                            path="/announces/:announceID"
                            element={<Single theme={theme} bodytheme={bodyTheme} />} />
                        <Route
                            path="/newuser"
                            element={<NewUser theme={theme} bodytheme={bodyTheme} />} />
                        <Route
                            path="/newanimal"
                            element={<NewAnimal theme={theme} bodytheme={bodyTheme} />} />
                        <Route
                            path="/newadress"
                            element={<NewAdress theme={theme} bodytheme={bodyTheme} />} />
                        <Route
                            path="/updateannounce/:announceID"
                            element={<UpdateSingle theme={theme} bodytheme={bodyTheme} />} />
                        <Route
                            path="*"
                            element={<Page404 theme={theme} bodytheme={bodyTheme} />} />
                    </Routes>

                </ThemeContext.Provider>

            </IdContext.Provider>
        </div >

    );
}

export default App;
