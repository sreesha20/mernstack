import React, { useState, useEffect } from 'react';
import './App.css';
import PieChart from './components/PieChart';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>MERN Pie Chart</h1>
      <PieChart data={data} />
    </div>
  );
}

export default App;
