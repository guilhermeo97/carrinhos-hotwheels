import { Home } from '@/components/InitialPage/Home';
import { NavBar } from '@/components/NavBar/NavBar';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <NavBar/>
      <Home/>
    </>
  );
}
