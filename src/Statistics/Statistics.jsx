import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

import Header from '../Header/Header';
import Sdata from './Sdata';
import Footer from '../Footer/Footer';


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