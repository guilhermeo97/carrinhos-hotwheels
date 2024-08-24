"use client"

import { Car } from "@/types/Car";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  params: {
    id: number;
  }
}

export const CarDetail = ({ params }: Props) => {
  const [car, setCar] = useState<Car | null>(null); // Inicialize com null

  useEffect(() => {
    axios.get(`http://localhost:5000/cars/`) // Inclua o ID na URL
      .then((response) => {
        const carFound = response.data.find((car: Car) => car.id === +params.id); // Encontre o carro com o ID correspondente
        setCar(carFound);
      })
    },
  [params.id])

  if (!car) {
    return <div>Carregando...</div>; // Renderize um loading enquanto os dados são carregados
  }

  return (
    <div className="p-3 my-2 bg-white container mx-auto">
      <p><strong>Id: </strong> {car.id}</p>
      <p><strong>Nome: </strong> {car.name}</p>
      <p><strong>Marca: </strong> {car.brand}</p>
      <p><strong>Cor: </strong> {car.color}</p>
      <p><strong>Ano: </strong> {car.year}</p>
    </div>
  )
}