
import { CarDetail } from '@/components/CarDetail/CarDetail';
import NavBar from '@/components/NavBar/NavBar';
import Link from 'next/link';

type Props = {
    params: {
        id: number;
        name: string;
        brand: string;
        color: string;
        year: number;
    }
}

const Page = ({ params }: Props) => {
    return(
        <>
            <NavBar/>
            <CarDetail params={params}/>
            <div className="divs">
                <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" href={'/cars/add'}>Adicionar carro</Link>
            </div>
                
        </>
    )
}

export default Page;