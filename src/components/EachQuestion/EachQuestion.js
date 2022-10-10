import React from 'react';

const EachQuestion = ({each, handleOptionClick}) => {
    const {question, options, correctAnswer} = each;

    return (
        <div className="mx-36 my-20 border-2 border-green-500">
            <h1 className="m-4">{question}</h1>
            <div className="grid grid-cols-2 m-4">
                {
                    options.map((option, idx) => 
                        <li
                            key={idx}
                            className="p-4 text-slate-50 bg-slate-900 px-20 block hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
                            onClick={() => handleOptionClick(option === correctAnswer)}
                        >{option}</li>)
                }
            </div>
        </div>
    );
};

export default EachQuestion;