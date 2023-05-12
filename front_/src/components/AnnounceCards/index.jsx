import './index.css';
import AnnounceCard from './AnnounceCard';
import { useEffect, useState } from 'react';


const AnnouceCards = ({
    datas,
    handleMore,
    handleUpdate,
    handleDelete,
    admin,
    theme }) => {


    return (
        <>
            <section className={`cards`}>
                {datas && datas.map((el, index) => {

                    return (
                        <AnnounceCard
                            key={index}
                            name={el.name}
                            logo={el.imageURL}
                            postedAt={el.date_perte}
                            town={el.ville}
                            postalCode={el.code_postal}
                            id={el.id}
                            admin={admin}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}
                            theme={theme}
                            sexe={el.sexe}
                            race={el.race}
                            color={el.couleur}
                        />)
                })}
            </section>
            <div className="btn-center">
                <button className="button-one" onClick={handleMore}>Load more</button>
            </div>
        </>


    );
};
export default AnnouceCards;
