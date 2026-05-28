import React from 'react';
import { useState } from 'react';
import './AppCardContainer.css';

async function testAPI() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_vRI68oYBqS7rcFFbZJoraZyrDdKr0e9AKCOrz4ug0xZzSUityVQ6a6YXzXid2zU9');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        alert(error);
    }
}

// testAPI();

const AppCardContainer = ({ name, picture, catsArr, setCatsArr, handleCardClick}) => {


    // console.log(catsArr);

    /*
        - loop through catsArr
        - for each index, generate a div with a good class name to later style as cards
            - how to procedurally generate divs again? which function hmm

    - map through
    - transform every element to a div
    - append multiple

    */

    return (
        <>
            <div className='card-container-body'>
                {catsArr.map(cat => (
                    <div
                        onClick = {() => handleCardClick(cat)}
                        key={cat.id}
                        className='cat-card'>
                        <img src={cat.url} alt="A SPECIAL WITTLE KITTY" />
                        <p>{cat.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export { AppCardContainer };