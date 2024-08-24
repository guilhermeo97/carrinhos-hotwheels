import { CarsList } from '@/components/CarsList/CarsList';
import NavBar from '@/components/NavBar/NavBar';
import { NextPage } from 'next';
import { cars } from '@/data/Cars';
import Link from 'next/link';

const CarsPage: NextPage = () => {
  
  

  return (
    <>
      <NavBar/>
      <CarsList cars={cars}/>
      <div className="divs">
        <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" href={'/cars/add'}>Adicionar carro</Link>
      </div>

    </>
  );
};

export default CarsPage;
