import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Barchart from '../Barchart/Barchart';

const Statistics = () => {
    const {data} = useLoaderData();
    return (
        <div className="h-screen">
            <h1 className="text-3xl m-16">Statistics: Number of Questions in each Quiz</h1>
            <Barchart data={data}></Barchart>
        </div>
    );
};

export default Statistics;