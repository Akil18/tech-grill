import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizes = useLoaderData();
    
    return (
        <div>
            <div className="flex items-center justify-center m-4">
                <h1 className="text-xl font-extrabold p-4">
                    "Test out your knowledge wihtin the quizzes mentioed below and get an understanding of how much you know about the topics"
                </h1>
                <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="bg-img" />
            </div>
            <div className="flex">
                {
                    quizes.data.map(quiz => 
                    <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;