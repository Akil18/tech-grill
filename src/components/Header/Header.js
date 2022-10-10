import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-around'>
            <h1 className='text-xl font-bold'>Tech Grill</h1>
            <div>
                <Link className='mr-4' to='/'>Home</Link>
                <Link className='mr-4' to='/statistics'>Statistics</Link>
                <Link className='mr-4' to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;