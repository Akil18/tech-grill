import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachQuestion from '../EachQuestion/EachQuestion';

const Section = () => {
    const questionsData = useLoaderData();
    const questions = questionsData.data.questions;
    console.log(questions);
    
    const handleOptionClick = (option) => {
        console.log(option);
    }

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