"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import axios from 'axios';

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

export const CarsList: React.FC<CarTableProps> = () => {
  const [cars, setCars] = useState<Car[]>([]);
  useEffect(() => {
    axios.get('http://localhost:5000/cars')
    .then((response) => {
        setCars(response.data)
    })
  }, [])
  
  return (
        
        <div>
          {cars.length <= 0 && "Carregando..."}
          {cars.length > 0 && 
          
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
        }
        </div>
          
      );
};
  