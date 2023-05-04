import './index.css';
import PetCard from './PetCard';
import { useEffect, useState } from 'react';


const PetCards = ({
    datas,
    handleMore,
    handleUpdate,
    admin,
    theme }) => {


    return (
        <>
            <section className={`cards`}>
                {datas && datas.map((el, index) => {

                    return (
                        <PetCard
                            key={index}
                            name={el.name}
                            logo={el.imageURL}
                            postedAt={el.date_perte}
                            location={el.code_postal}
                            id={el.id}
                            admin={admin}
                            handleUpdate={handleUpdate}
                            theme={theme}
                        />)
                })}
            </section>
            <div className="btn-center">
                <button className="button-one" onClick={handleMore}>Load more</button>
            </div>
        </>


    );
};
export default PetCards;
