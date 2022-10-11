import React from 'react';

const Blog = () => {
    return (
        <div className="h-screen m-4 lg:m-32 text-left">
            <div>
                <p className="text-xl my-8">What is the purpose of react router</p>
                <p>React Router is standard library to enable routing within the react app. It allows navigation between views of different components, changing the browser URL and keeping the user interface in sync with the change in the URL.</p>
            </div>
            <div>
                <p className="text-xl my-8">How does Context API work?</p>
                <p>The Context API is used to create global variables that can be passed around quite easily avoiding the the alternative process of prop drilling. It is a easier and lighter way of passing data between components.</p>
            </div>
            <div>
                <p className="text-xl my-8">Define useRef</p>
                <p>useRef is ahook in react that enables to create a reference to the DOM element in the functional component. useRef returns a ref object that can be mutated.</p>
            </div>
        </div>
    );
};

export default Blog;