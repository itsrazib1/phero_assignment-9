import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

import Header from '../Header/Header';
import Sdata from './Sdata';


const Statistics = () => {
    return (
        <>
        

        <Header/>
        
        <div>
            <Sdata></Sdata>

        </div>
        </>
    );
};

export default Statistics;