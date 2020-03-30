import React from 'react';
import Contact from './components/Contact.jsx';

const ronald ={
  name : "Ronald West",
  image : "https://randomuser.me/api/portraits/men/44.jpg",
  isOnline : true,
};

const App = () => <Contact {...ronald}/>


export default App