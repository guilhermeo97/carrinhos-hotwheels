import React from 'react';

export function NavBar() {
  return (
    
    <header>
        <nav>
            <li><a href='/'>Página Inicial</a></li>
            <li><a href='/about'>Sobre</a></li>
            <li><a href='/cars'>Carros</a></li>
            <li><a href='/cars/add'>Adicionar Carro</a></li>
    </nav>
    </header>
    
  );
}

export default NavBar;
