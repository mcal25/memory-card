import React from 'react';
import { useState } from 'react';

const AppHeader = ({ score, bestScore }) => {
    return (
        <>
            <h1>Meowmory Card</h1>
            <div className='score-section'>
                <h3>Score:</h3>
                <h3>Best Score:</h3>
            </div>
            <p className='instructions'>
                Boop each cat once, but no more. Remember which ones you have booped until you've booped them all to win.
            </p>
        </>
    );
};

export { AppHeader }