import React from 'react';
import Contact from './components/Contact.jsx';

const ronald ={
  name : "Ronald West",
  image : "https://randomuser.me/api/portraits/men/44.jpg",
  online:true
};
const samantha ={
  name : "Samantha Campbell",
  image : "https://randomuser.me/api/portraits/women/49.jpg",
  online:false
}
const terry ={
  name : "Terry Ortiz",
  image : "https://randomuser.me/api/portraits/men/15.jpg",
  online:true
}

const App = () => {
  return (
    <div>
      <Contact {...ronald} />
      <Contact {...samantha} />
      <Contact {...terry} />
    </div>
  );
}



export default App