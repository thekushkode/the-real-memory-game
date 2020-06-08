import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  let projects = [
    { name: 'Project Ish', likes: 1460 },
    { name: 'The Kush Kode', likes: 32222 },
    { name: 'Goat Web Design', likes: 18700 },
    { name: 'BubbaKushner.com', likes: 3890000000 },
    { name: 'The Real Facebook', likes: 7238 },
    { name: 'Forrest Gump 2: The Return of Bubba', likes: 23451123 },
  ];

  return (
    <div className="App">
      {projects.map((project, index) => {
        return <Card 
        name={project.name} 
        key={index} 
        likes={project.likes}></Card>
      })}
    </div>
  );
};

export default App;
