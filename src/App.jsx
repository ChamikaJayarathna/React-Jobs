import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className="">
      <NavBar/>
      <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs"/>
    </div>
  );
}

export default App;