import React from 'react';

const Quiz = ({quiz}) => {
    const {id, name, logo, total} = quiz;
    return (
        <div className="w-80 bg-slate-900 text-white m-4 rounded-md"> 
            <img src={logo} alt={name} />
            <div className="p-4">
                <h1 className="text-xl font-bold">{name}</h1>
                <h3 className="p-2">No. of Questions: {total}</h3>
                <button className="p-4 bg-slate-50 text-slate-900 w-full">Take Quiz</button>
            </div>
        </div>
    );
};

export default Quiz;