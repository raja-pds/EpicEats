import React from 'react'
import HomeNavbar from '../components/HomeNavbar';
import Heropage from '../components/Heropage';
import Example from '../components/Example';
import Footer from '../components/Footer';


function Home  ()  {
  return (
   <>
     
        <Heropage />  
        <Example />
        <Footer />
   </>
  )
}

export default Home;