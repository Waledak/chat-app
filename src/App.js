import React from 'react';
import Contact from './components/Contact.jsx';

const ronald ={
  name : "Ronald West",
  image : "https://randomuser.me/api/portraits/men/44.jpg",
  isOnline : true,
};
const samantha ={
  name : "Samantha Campbell",
  image : "https://randomuser.me/api/portraits/women/49.jpg",
  isOnline : true,
}
const terry ={
  name : "Terry Ortiz",
  image : "https://randomuser.me/api/portraits/men/15.jpg",
  isOnline : true,
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