import React from 'react';
import logo from '../assets/icon/logo.png';

function Header () {
    return (
        <div className='bg-white shadow'>
            <header className='container mx-quto flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='mr-3' src={logo} alt='Dunder Mifflin Logo' />
                    <h1 className='font-bold'>Dunder Mifflin: Scranton</h1>
                </div>
            </header>
        </div>
    )
}

export default Header;

