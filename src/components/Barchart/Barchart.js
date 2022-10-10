import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Barchart = ({data}) => {

    return (
        <div className="flex justify-center">
            <BarChart width={500} height={500} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill=" #009900" />
            </BarChart>
        </div>
    );
};

export default Barchart;