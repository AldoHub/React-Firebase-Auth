import React from 'react';

//routes
import Routes from "./routes";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
