import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Barchart = ({data}) => {

    return (
        <div className="flex justify-center w-full h-full p-4 lg:w-1/2 lg:h-1/2">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={500} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="total" fill=" #009900" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Barchart;