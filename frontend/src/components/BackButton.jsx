import React from 'react';
import {Link} from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';

/*className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'*/

const BackButton = ({destination = '/'}) => {
    return (
        <div className='flex'>
            <Link to={destination} className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                <BsArrowLeft className='text-2x1' />
            </Link>
        </div>
    )
}

export default BackButton;