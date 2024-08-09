import { CarForm } from '@/components/CarForm/AddCar';
import NavBar from '@/components/NavBar/NavBar';
import { NextPage } from 'next';

const AddPage: NextPage = () => {
  return (
    <div>
      <NavBar />
      <CarForm />
    </div>
  );
};

export default AddPage;
