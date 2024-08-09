
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
            <Link href={'/cars/add'}>Adicionar carro</Link>
        </>
    )
}

export default Page;