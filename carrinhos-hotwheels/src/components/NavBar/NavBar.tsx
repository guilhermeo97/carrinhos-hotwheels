import React from 'react';

export function NavBar() {
  return (
    
    <header className='flex'>
        <nav>
            <li className='bg-white p-2 hover:text-white hover:bg-sky-700 hover:text-white'><a className='hover:text-white' href='/'>Página Inicial</a></li>
            <li className='bg-white p-2 hover:text-white hover:bg-sky-700 hover:text-white'><a className='hover:text-white' href='/about'>Sobre</a></li>
            <li className='bg-white p-2 hover:text-white hover:bg-sky-700 hover:text-white'><a className='hover:text-white' href='/cars'>Carros</a></li>
            <li className='bg-white p-2 hover:text-white hover:bg-sky-700 hover:text-white'><a className='hover:text-white' href='/cars/add'>Adicionar Carro</a></li>
    </nav>
    </header>
    
  );
}

export default NavBar;
