import React from 'react';

function NavBar ({onSearch, searchTerm, sortbyName, sortbyDept}) {
    return (
        <div className='md:flex justify-between'>
            <div>
                <button onClick={sortbyName} className='bg-white focus:bg-blue-500 focus:text-white focus:outline-none shadow font-bold hover:bg-blue-500 hover:text-white'>Name</button>
                <button onClick={sortbyDept} className='bg-white focus:bg-blue-500 focus:text-white focus:outline-none shadow font-bold hover:bg-blue-500 hover:text-white'>Name</button>
            </div>
            <form>
                <input 
                    value={searchTerm}
                    onChange={onSearch}
                    className='shadow'
                    type='text'
                    placeholder='search for employee'
                />
            </form>
        </div>

    )
}

export default NavBar;