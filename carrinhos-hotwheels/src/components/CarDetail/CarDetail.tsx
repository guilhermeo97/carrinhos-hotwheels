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
                <div key={car.id}>
                    <p>{car.id}</p>
                    <p>{car.name}</p>
                    <p>{car.brand}</p>
                    <p>{car.color}</p>
                    <p>{car.year}</p>
                </div>
            ))}   
        </>
        )
}

