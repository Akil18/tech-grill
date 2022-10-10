import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachQuestion from '../EachQuestion/EachQuestion';

const Section = ({handleOptionClick}) => {
    const questionsData = useLoaderData();
    const questions = questionsData.data.questions;
    console.log(questions);

    return (
        <div>
            {
                questions.map(question => 
                    <EachQuestion
                        key={question.id}
                        each={question}
                        handleOptionClick={handleOptionClick}
                    ></EachQuestion>)
            }
        </div>
    );
};

export default Section;