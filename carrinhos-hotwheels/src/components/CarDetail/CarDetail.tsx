import { Car } from "@/types/Car";
import { cars } from "@/data/Cars";


type Props = {
    params: {
        id: number;
    }
}

export const CarDetail = ({ params }: Props) => {
    const filtrar: Car[] = cars.filter(car => car.id == params.id)
    
    return(
        <>
            {filtrar.map((car) => (
                <div className="p-3 my-2 bg-white container mx-auto" key={car.id}>
                    <p><strong>Id: </strong> {car.id}</p>
                    <p><strong>Nome: </strong> {car.name}</p>
                    <p><strong>Marca: </strong> {car.brand}</p>
                    <p><strong>Cor: </strong> {car.color}</p>
                    <p><strong>Ano: </strong> {car.year}</p>
                </div>
            ))}   
        </>
        )
}

