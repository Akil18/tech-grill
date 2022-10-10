import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachQuestion from '../EachQuestion/EachQuestion';

const Section = ({handleOptionClick, handleShowAnswer}) => {
    const questionsData = useLoaderData();
    const questions = questionsData.data.questions;
    console.log(questionsData.data);

    return (
        <div className="m-2">
            <h1 className="my-8 text-7xl">{questionsData.data.name}</h1>
            {
                questions.map(question => 
                    <EachQuestion
                        key={question.id}
                        each={question}
                        handleOptionClick={handleOptionClick}
                        handleShowAnswer={handleShowAnswer}
                    ></EachQuestion>)
            }
        </div>
    );
};

export default Section;