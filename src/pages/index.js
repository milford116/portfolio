
import Navbar from '../components/Navbar';
import Sidebar from '../components/Navbar/Sidebar';
import React ,{useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjthree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen,setIsOpen]= useState(false)
    const toggle =() =>{
        setIsOpen(!isOpen)
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle ={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Services/>
            <InfoSection {...homeObjthree}/>
            <Footer/>
        </>
    )
}

export default Home;
