import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizes = useLoaderData();
    
    return (
        <div className="grid grid-cols-2 ml-48">
            {
                quizes.data.map(quiz => 
                <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;