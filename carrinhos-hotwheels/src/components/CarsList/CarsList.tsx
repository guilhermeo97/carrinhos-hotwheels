import React from 'react';
import Link from 'next/link'

interface Car {
  id: number;
  name: string;
  brand: string;
  color: string;
  year: number;
}

interface CarTableProps {
    cars: Car[];
}

export const CarsList: React.FC<CarTableProps> = ({ cars }) => {
    
  return (
        <div className='container'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td><Link href={`/cars/${car.id}`}>Detalhar</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      );
};
  