import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h4>Match Cards To Win!</h4>
      </header>
      <main>
        <div className="Card-front">

        </div>
        <div className="Card-back">
          <div className="Card-container">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className="Card-container">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className="Card-container">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className="Card-container">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </main>
    </div>
  );
};

// let projects = [
//   { name: 'Project Ish', likes: 1460 },
//   { name: 'The Kush Kode', likes: 32222 },
//   { name: 'Goat Web Design', likes: 18700 },
//   { name: 'BubbaKushner.com', likes: 3890000000 },
//   { name: 'The Real Facebook', likes: 7238 },
//   { name: 'Forrest Gump 2: The Return of Bubba', likes: 23451123 },
// ];

{/* return (
  <div>
  {projects.map((project, index) => {
    return <Card
      name={project.name}
      key={index}
      likes={project.likes}></Card>
  })}
</div>) */}

export default App;
