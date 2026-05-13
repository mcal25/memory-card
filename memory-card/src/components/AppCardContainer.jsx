import React from 'react';
import { useState } from 'react';

async function testAPI() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_vRI68oYBqS7rcFFbZJoraZyrDdKr0e9AKCOrz4ug0xZzSUityVQ6a6YXzXid2zU9');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        alert(error);
    }
}

testAPI();

const AppCardContainer = ({ name, picture }) => {
    console.log('CardContainer.jsx connected');








    return (
        <>
            <div className='card-container-body'>
                <img src={picture} alt="AN ADORABLE FELINE OF ANONYMOUS HERITAGE" />
                <h1 className='card-container-name'>{name}</h1>
            </div>
        </>
    );
}

export { AppCardContainer };