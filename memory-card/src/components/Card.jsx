import React from 'react';
import { useState } from 'react';

const Card = ({ name, picture, setName, setPicture }) => {
    console.log('Card.jsx connected');
    return (
        <>
            <div className='card-body'>
                <img src={picture} alt="AN ADORABLE FELINE OF ANONYMOUS HERITAGE" />
                <h1 className='card-name'>{name}</h1>
            </div>
        </>
    );
}

export { Card };