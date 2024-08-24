"use client"

import { cars } from '@/data/Cars';
import { Car } from '@/types/Car';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputsNewCar } from './InputNewCar';
import axios from 'axios';

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
    
    const handleFormSubmit: SubmitHandler<Car> = async (data) => {
        const response = await axios.post('http://localhost:5000/cars/',{
            name: data.name,
            brand: data.brand, 
            color: data.color,
            year: data.year
        })
        if(response.data){
            console.log(response.data)
        }
    }

    return(
        <>
            <div className="divs">
                <h2>Cadastrar novo carro</h2>
            </div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <InputsNewCar control={control} name='name' rules={{required: 'Campo obrigatório', minLength: {value: 3, message: "No mínimo 3 letras"}}} />
                <InputsNewCar control={control} name='brand' rules={{required: 'Campo obrigatório', minLength: {value: 3, message: "No mínimo 3 letras"}}} />
                <InputsNewCar control={control} name='color' rules={{required: 'Campo obrigatório'}} />
                <InputsNewCar control={control} name='year' rules={{required: 'Campo obrigatório', min: {value: 1900, message: "Ano mínimo de fabricação: 1900"}, max: {value: 2024, message: "Ano máximo de fabricação: 2024"}}} />
                <input type="file" name='file' />

                <button className="btn-submit" type="submit" value="Enviar">Enviar</button>
            </form>
            
        </>
    )
};
