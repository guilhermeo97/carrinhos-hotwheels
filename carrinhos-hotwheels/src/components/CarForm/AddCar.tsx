"use client"

import { cars } from '@/data/Cars';
import { Car } from '@/types/Car';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputsNewCar } from './InputNewCar';

export const CarForm = () => {
    const { handleSubmit, control } = useForm<Car>({
        defaultValues: {
          name: "",
          brand: "",
          color: "",
          year: 0,
        },
        mode: "onChange",
      })
    
    const handleFormSubmit: SubmitHandler<Car> = (data) => {
        data.id = cars.length + 1;
        cars.push(data);
        console.log(data)
    }

    return(
        <>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <InputsNewCar control={control} name='name' rules={{required: 'Campo obrigatório'}} />
                <InputsNewCar control={control} name='brand' rules={{required: 'Campo obrigatório'}} />
                <InputsNewCar control={control} name='color' rules={{required: 'Campo obrigatório'}} />
                <InputsNewCar control={control} name='year' rules={{required: 'Campo obrigatório'}} />
                <input type="file" name='file' />

                <button type="submit" value="Enviar">Enviar</button>
            </form>
            
        </>
    )
};
