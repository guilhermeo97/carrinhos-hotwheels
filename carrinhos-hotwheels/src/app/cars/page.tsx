import { CarsList } from '@/components/CarsList/CarsList';
import NavBar from '@/components/NavBar/NavBar';
import { NextPage } from 'next';
import { cars } from '@/data/Cars';

const CarsPage: NextPage = () => {
  
  return (
    <>
      <NavBar/>
      <CarsList cars={cars}/>
    </>
  );
};

export default CarsPage;
