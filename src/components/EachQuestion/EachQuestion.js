import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const EachQuestion = ({each, handleOptionClick, handleShowAnswer}) => {
    const {question, options, correctAnswer} = each;

    return (
        <div className="lg:mx-36 lg:mb-20 border-2 border-green-500">
            <div className="flex justify-center items-center m-4">
                <h1 className="mr-4 text-lg font-semibold">{question}</h1>
                <FontAwesomeIcon className="cursor-pointer hover:text-white hover:bg-slate-900 p-2 rounded-full" onClick={() => handleShowAnswer(correctAnswer)} icon={faEye} />
            </div>
            <div className="lg:grid grid-cols-2 gap-2 lg:m-4">
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