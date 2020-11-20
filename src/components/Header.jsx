import React from 'react';
import logo from '../assets/icon/logo.png';

function Header () {
    return (
        <div className='bg-white shadow'>
            <header className='container mx-quto flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='mr-3 object-scale-down' src={logo} alt='Dunder Mifflin Logo' />
                </div>
            </header>
        </div>
    )
}

export default Header;

