import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Greeting from './Greeting';
import Challange from './Challange';

export default function Header() {


  

  return (
   <header>
       <Navbar/>
       <Greeting nama="Wildan" />
   </header>
  )
}
