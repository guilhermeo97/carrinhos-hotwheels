// pages/about.tsx
import { About } from '@/components/About/About';
import NavBar from '@/components/NavBar/NavBar';
import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <>
      <NavBar/>
      <About/>
    </>
  );
};

export default AboutPage;
